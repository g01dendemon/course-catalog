import AvailabilityBadge from "./AvailabilityBadge.jsx";
function CourseCard({ course }) {

    return (
        <div>
            <h3>{course.title}</h3>
            <p>Teacher: {course.teacher}</p>
            <p>Length: {course.duration} hours</p>
            <p>Price: ${course.price}</p>
            {course.price > 400 && <p>Премиальный курс</p>}
            <AvailabilityBadge isAvailable={course.isAvailable}/>
        </div>
    );

}

export default CourseCard;