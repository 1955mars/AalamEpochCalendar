import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    public static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-100 p-8 text-center">
                    <div className="max-w-2xl bg-slate-800 p-8 rounded-xl shadow-2xl border border-slate-700">
                        <h1 className="text-3xl font-bold text-red-400 mb-4">Something went wrong</h1>
                        <p className="text-slate-300 mb-6">
                            The application encountered an unexpected error.
                        </p>

                        {this.state.error && (
                            <div className="text-left bg-black/50 p-4 rounded-lg overflow-auto max-h-64 mb-6 font-mono text-xs text-red-200">
                                <p className="font-bold mb-2">{this.state.error.toString()}</p>
                                {this.state.errorInfo && (
                                    <pre className="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
                                )}
                            </div>
                        )}

                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-colors shadow-lg"
                        >
                            Reload Application
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
