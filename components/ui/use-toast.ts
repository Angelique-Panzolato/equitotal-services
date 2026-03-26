import * as React from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

const listeners: Array<(toast: ToasterToast) => void> = [];

export function useToast() {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([]);

  React.useEffect(() => {
    const listener = (toast: ToasterToast) => {
      setToasts((prev) => [...prev, toast].slice(-TOAST_LIMIT));
    };

    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return { toasts };
}

export function toast(toast: ToasterToast) {
  listeners.forEach((listener) => listener(toast));
}
