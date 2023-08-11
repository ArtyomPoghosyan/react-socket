import { io } from 'socket.io-client';

const apiKey = import.meta.env.VITE_SOME_KEY;

export const socket = io(apiKey);