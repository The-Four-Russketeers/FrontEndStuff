import React from 'react';
import Navbar from '../Components/navbar';
import "../Components/navbar";
import "./styles.css"

const YourComponent = () => {
  return (
    <div>
      <Navbar />
      
      <h2 style={{ textAlign: 'center' }}>Recommended Classes for Computer Science 2023-2024</h2>
     

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>        
        <div style={{ maxWidth: '90%', width: '100%', margin: '0 auto' }}>
        <table table className="custom-table">
          <caption className="custom-caption">Fine Arts and Humanities</caption>
          <thead>
            <tr>
              <th className="custom-th">Course Number</th>
              <th className="custom-th">Course Name</th>
              <th className="custom-th">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td td className="custom-td">ART 2123</td>
              <td td className="custom-td">Experiencing Art(ACTS=ARTA1003)</td>
              <td td className="custom-td">This course is designed to provide a background in art and the related processes so
                          that a student may develop powers of observation and thereby respond to a work of
                          art</td>
            </tr>
            <tr>
              <td td className="custom-td">MUS 2003</td>
              <td td className="custom-td">Introduction to Music</td>
              <td td className="custom-td">An overall view of music history from Medieval to
                                                               Contemporary times with a focus on relating musical
                                                              happenings and concepts to the other arts. </td>
            </tr>
            <tr>
              <td className="custom-td">TH 2273</td>
              <td className="custom-td">Introduction to Theatre</td>
              <td className="custom-td">A study of theatre as an art form with particular attention to scenic, dramatic, literary and historic elements.</td>
            </tr>
            <tr>
              <td className="custom-td">ENGL/JOUR 2173</td>
              <td className="custom-td">Introduction to Film</td>
              <td className="custom-td">A study of film as an art form with particular attention given to genres, stylistic technique and film's relation to popular culture.</td>
            </tr>
            <tr>
              <td className="custom-td">ENGL 2003</td>
              <td className="custom-td"> Introduction to World Literature</td>
              <td className="custom-td">An exploration of significant authors and themes in world literature.</td>
            </tr>
            <tr>
              <td className="custom-td">ENGL 2013</td>
              <td className="custom-td">Intro. to American Literature</td>
              <td className="custom-td">An exploration of significant authors and themes in American literature.
                                                              </td>
            </tr>
            <tr>
              <td className="custom-td">PHIL 2003</td>
              <td className="custom-td">Introduction to Philosophy</td>
              <td className="custom-td">A study of major philosophical theories and methods and their practical applications.</td>
            </tr>
            <tr>
              <td className="custom-td">PHIL 2053</td>
              <td className="custom-td">Introduction to Critical Thinking</td>
              <td className="custom-td">The course will initiate the student in the art of analyzing and evaluating his or her thinking in order to make it more potent and persuasive. Topics will include the analysis of argument, the theory of definition, the experimental method of inquiry, and the informal fallacies.</td>
            </tr>
            <tr>
              <td className="custom-td">LEAD 2003</td>
              <td className="custom-td">Ethics in Leadership</td>
              <td className="custom-td">This course is an examination of ethics in leadership. Students will demonstrate critical thinking skills to identify and remedy ethical issues found in a variety of leadership situations. This includes understanding right and wrong, good versus evil, and how these decisions impact their personal leadership as well as those around them.</td>
            </tr>
            {/* Add more rows for other courses */}
          </tbody>
        </table>
        </div>
        </div>

        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>        
        <div style={{ maxWidth: '90%', width: '100%', margin: '0 auto' }}>
        <table className="custom-table">          
          <caption className="custom-caption">U.S History & Government</caption>          
          <thead>
            <tr>
            <th className="custom-th">Course Number</th>
              <th className="custom-th">Course Name</th>
              <th className="custom-th">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="custom-td">HIST 1903</td>
              <td className="custom-td">Survey of American History</td>
              <td className="custom-td">Survey of American History. An overview of American history from the pre-colonial period to the present.</td>
            </tr>
            <tr>
              <td className="custom-td">HIST 2003</td>
              <td className="custom-td">U.S. History to 1877</td>
              <td className="custom-td">The study of the development of the American nation to the Civil War and Reconstruction Era.</td>
            </tr>
            <tr>
              <td className="custom-td">HIST 2013</td>
              <td className="custom-td">U.S. History since 1877</td>
              <td className="custom-td">The study of the development of the American nation since the Civil War and Reconstruction Era.</td>
            </tr>
            <tr>
              <td className="custom-td">POLS 2003</td>
              <td className="custom-td">American Government</td>
              <td className="custom-td">A study of the principles and practices of American Government, explaining the origin and purpose of our governmental institutions in a broad sense, with consideration given to interstate and national state relations.</td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>

        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>        
        <div style={{ maxWidth: '90%', width: '100%', margin: '0 auto' }}>
        <table className="custom-table">
          <caption className="custom-caption">Science with Lab</caption>
          <thead>
            <tr>
            <th className="custom-th">Course Number</th>
              <th className="custom-th">Course Name</th>
              <th className="custom-th">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="custom-td">BIOL 1014</td>
              <td className="custom-td">Intro. to Biological Science</td>
              <td className="custom-td">An introduction to the major concepts of biological science, with an emphasis on the development of this scientific perspective and how it applies to humans.</td>
            </tr>
            <tr>
              <td className="custom-td">BIOL 1004</td>
              <td className="custom-td">Principles of Environmental Science</td>
              <td className="custom-td">This course is designed to bring the student to a basic but informed awareness of and responsible behavior toward our environment and the role of the human race therein. The content will include a study of the philosophical and scientific basis for the study of ecosystems and the environment, the nature of ecosystems, the techniques used to study the environment, the origin and development of current environmental problems, the interdisciplinary nature of environmental studies, the processes of critical thinking and problem solving, and the moral and ethical implications of environmentally-mandated decisions.</td>
            </tr>
            <tr>
              <td className="custom-td">GEOL 1014</td>
              <td className="custom-td">Physical Geology</td>
              <td className="custom-td">A survey of the earth's features and processes which include minerals, rocks, plate tectonics, geologic time, earthquakes, volcanoes, groundwater, development of landscapes, erosion, and climate change. Laboratory exercises will serve to support/enhance lecture topics.</td>
            </tr>
            
          </tbody>
        </table>
        </div>
        </div>

        



        {/* Add more tables for other sections */}
      
    </div>
  );
};

export default YourComponent;