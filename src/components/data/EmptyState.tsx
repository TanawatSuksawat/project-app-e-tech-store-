// placeholder
// src/components/data/EmptyState.tsx
export default function EmptyState({ title = "Nothing here", subtitle = "Try adjusting filters." }) {
    return (
        <div className="text-center py-20">
            <div className="mx-auto size-24 rounded-2xl bg-white/5 backdrop-blur flex items-center justify-center card-3d">
                <span className="text-4xl">🪄</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-white/65">{subtitle}</p>
        </div>
    );
}