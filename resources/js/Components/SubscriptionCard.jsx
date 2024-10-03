import Button from "./Button";

export default function SubscriptionCard({
    id,
    name,
    price,
    durationInMonth,
    features,
    isPremium,
    onClickSubscription,
}) {
    return (
        <>
            {!isPremium && (
                <div className="w-[255px] space-y-[30px] rounded-[26px] border border-[#F1F1F1] px-4 py-[30px] text-sm md:w-[300px]">
                    <div>
                        <h2 className="mb-2 leading-9">{name}</h2>

                        <span className="text-[28px] font-bold">
                            IDR {price.toLocaleString()}
                        </span>

                        <p className="text-xs font-light leading-5 text-gray-1">
                            /{durationInMonth} months
                        </p>
                    </div>

                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li
                                key={`${index}-${id}-${features}`}
                                className="flex items-center gap-2"
                            >
                                <img
                                    src="/icons/ic_tick.svg"
                                    alt="Checklist icon"
                                />{" "}
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div onClick={onClickSubscription}>
                        <Button
                            type="button"
                            variant="white-outline"
                            className="text-base font-normal"
                        >
                            Start {name}
                        </Button>
                    </div>
                </div>
            )}

            {isPremium && (
                <div className="w-[255px] space-y-[30px] rounded-[26px] bg-black px-4 py-[30px] text-sm text-white md:w-[300px]">
                    <div className="w-fit rounded-full bg-alerange p-[15px]">
                        <img
                            src="/icons/ic_star.svg"
                            width="24"
                            alt="Star icon"
                        />
                    </div>

                    <div>
                        <h2 className="mb-2 leading-9">{name}</h2>

                        <span className="text-[28px] font-bold">
                            IDR {price.toLocaleString()}
                        </span>

                        <p className="text-xs font-light leading-5 text-gray-1">
                            /{durationInMonth} months
                        </p>
                    </div>

                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li
                                key={`${index}-${id}-${features}`}
                                className="flex items-center gap-2"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div onClick={onClickSubscription}>
                        <Button
                            type="button"
                            variant="primary"
                            className="text-base"
                        >
                            Subscribe Now
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}
