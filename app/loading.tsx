export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-accent rounded-full animate-spin animation-delay-75"></div>
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-serif text-foreground mb-2">Loading</h2>
                    <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-100"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-200"></div>
                    </div>
                </div>
            </div>
        </div>
    );
} 