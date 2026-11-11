import CourseCard from "./CourseCard";

function CourseList({ courses }) {

    if (courses.length === 0) {
        return <p>Курсы не найдены.</p>;
    }

    return (
        <div>
            {courses.map((courses) => (
                <CourseCard key={courses.id} course={courses} />
            ))}
        </div>
    );
}

export default CourseList;