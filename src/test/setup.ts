import { TextDecoder, TextEncoder } from 'util';
import '@testing-library/jest-dom';

// Polyfill for jsdom (react-router etc. may use these)
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;

// Mock PatternFly Chatbot MessageBar to avoid monaco-editor dependency
jest.mock('@patternfly/chatbot/dist/dynamic/MessageBar', () => ({
  MessageBar: jest.fn(() => null),
}));

// Mock CSS imports
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
};

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
} as any;
