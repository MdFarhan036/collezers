
export const CoursePage = ({ match }) => {
    const course = courses.find(course => course.id.toString() === match.params.id);

    return (
        <div>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <h3>Specializations:</h3>
            <ul>
                {course.specializations.map((specialization, index) => (
                    <li key={index}>
                        <Link to={`${match.url}/${index + 1}`}>{specialization}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};