import { create } from 'zustand';

interface PuterState {
    auth: {
        isAuthenticated: boolean;
        user: PuterUser | null;
        signIn: () => void;
        signOut: () => void;
    };
    fs: any;
    kv: any;
    ai: any;
    isLoading: boolean;
    error: string | null;
    init: () => Promise<void>;
    clearError: () => void;
}

declare const puter: any;

export const usePuterStore = create<PuterState>((set, get) => ({
    auth: {
        isAuthenticated: false,
        user: null,
        signIn: () => {
            if (typeof puter !== 'undefined') {
                puter.auth.signIn();
            }
        },
        signOut: () => {
            if (typeof puter !== 'undefined') {
                puter.auth.signOut();
            }
        },
    },
    fs: null,
    kv: null,
    ai: null,
    isLoading: true,
    error: null,
    clearError: () => set({ error: null }),
    init: async () => {
        try {
            // Check if puter is available
            if (typeof puter === 'undefined') {
                set({ isLoading: false, error: 'Puter.js not found' });
                return;
            }

            const isAuthenticated = await puter.auth.isSignedIn();
            let user = null;
            if (isAuthenticated) {
                user = await puter.auth.getUser();
            }

            set((state) => ({
                auth: {
                    ...state.auth,
                    isAuthenticated,
                    user,
                },
                fs: puter.fs,
                kv: puter.kv,
                ai: puter.ai,
                isLoading: false,
            }));
        } catch (err: any) {
            set({ isLoading: false, error: err.message });
        }
    },
}));