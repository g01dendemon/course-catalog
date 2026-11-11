function AvailabilityBadge({ isAvailable }) {


    return (
        <span>
            {isAvailable ? "Доступен" : "Набор закрыт"}
        </span>
    );
}

export default AvailabilityBadge;