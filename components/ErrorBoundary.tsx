
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="bg-slate-900 text-slate-200 min-h-screen flex flex-col items-center justify-center font-sans">
          <div className="text-center p-8 border border-red-500/30 rounded-lg bg-slate-800/50">
            <h1 className="text-4xl font-bold text-red-400 mb-4">¡Ups! Algo salió mal.</h1>
            <p className="text-lg text-slate-300 mb-6">
              Nuestros sistemas han detectado una interferencia. Intenta refrescar la página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition-colors"
            >
              Recargar
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
