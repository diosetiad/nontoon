export default function ActiveSubscriptionCard({
    isPremium,
    name,
    remainingActiveDays,
    activeDays,
}) {
    return (
        <>
            {!isPremium && (
                <div className="mt-[109px] pr-8 xl:mt-auto">
                    <div className="rounded-3xl bg-white p-4 outline outline-1 outline-[#f1f1f1]">
                        <h2 className="mb-8 text-lg font-semibold text-black">
                            {name}
                        </h2>
                        <div className="text-sm text-black">
                            {remainingActiveDays} days left out of {activeDays}
                        </div>
                        <progress
                            className="progress-bar"
                            value={remainingActiveDays}
                            max={activeDays}
                        />
                    </div>
                </div>
            )}

            {isPremium && (
                <div className="mt-[109px] pr-8 xl:mt-auto">
                    <div className="rounded-3xl bg-black p-4">
                        <img src="/icons/ic_star-rounded.svg" alt="Star logo" />
                        <h2 className="mb-8 mt-4 text-lg font-semibold text-white">
                            {name}
                        </h2>
                        <div className="text-sm text-white">
                            {remainingActiveDays} days left out of {activeDays}
                        </div>
                        <progress
                            className="progress-bar"
                            value={remainingActiveDays}
                            max={activeDays}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
