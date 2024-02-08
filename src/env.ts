export interface Environtment {
    SERVER_URL: string;
}

export const ENV: Environtment = {
    SERVER_URL: import.meta.env.VITE_SERVER_URL,
};

