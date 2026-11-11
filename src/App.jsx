import { courses} from "./data/courses.js";
import CourseList from "./components/CourseList.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
      <>
        <Header />
        <CourseList courses={courses} />

        <Footer />
      </>
  );

}

export default App;