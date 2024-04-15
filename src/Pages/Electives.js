import React from 'react';
import Navbar from '../Components/navbar';

const YourComponent = () => {
  return (
    <div>
      <Navbar />
      
      <h1 style={{ textAlign: 'center' }}>Recommended Classes for Computer Science 2023-2024</h1>
     

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>        
        <div style={{ maxWidth: '90%', width: '100%', margin: '0 auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <caption style={{ fontWeight: 'bold', fontSize: '1.5em', textAlign: 'left'  }}>Fine Arts and Humanities</caption>
          <thead>
            <tr>
            <th style={{ textAlign: 'left', padding: '8px',  border: '1px solid black' }}>Course Number</th>
              <th style={{ textAlign: 'left', padding: '8px',  border: '1px solid black' }}>Course Name</th>
              <th style={{ textAlign: 'left', padding: '8px',  border: '1px solid black' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px', borderright: '1px solid black'}}>ART 2123</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>Experiencing Art(ACTS=ARTA1003)</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>This course is designed to provide a background in art and the related processes so
                          that a student may develop powers of observation and thereby respond to a work of
                          art</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px'}}>MUS 2003</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>Introduction to Music</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>An overall view of music history from Medieval to
                                                               Contemporary times with a focus on relating musical
                                                              happenings and concepts to the other arts. </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px'}}>TH 2273</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>Introduction to Theatre</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>A study of theatre as an art form with particular attention to scenic, dramatic, literary and historic elements.</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px'}}>ENGL/JOUR 2173</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>Introduction to Film</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>A study of film as an art form with particular attention given to genres, stylistic technique and film's relation to popular culture.</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px'}}>ENGL 2003</td>
              <td style={{ textAlign: 'left', padding: '8px'}}> Introduction to World Literature</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>An exploration of significant authors and themes in world literature.</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px'}}>ENGL 2013</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>Intro. to American Literature</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>An exploration of significant authors and themes in American literature.
                                                              </td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px'}}>PHIL 2003</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>Introduction to Philosophy</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>A study of major philosophical theories and methods and their practical applications.</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px'}}>PHIL 2053</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>Introduction to Critical Thinking</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>The course will initiate the student in the art of analyzing and evaluating his or her thinking in order to make it more potent and persuasive. Topics will include the analysis of argument, the theory of definition, the experimental method of inquiry, and the informal fallacies.</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px'}}>LEAD 2003</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>Ethics in Leadership</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>This course is an examination of ethics in leadership. Students will demonstrate critical thinking skills to identify and remedy ethical issues found in a variety of leadership situations. This includes understanding right and wrong, good versus evil, and how these decisions impact their personal leadership as well as those around them.</td>
            </tr>
            {/* Add more rows for other courses */}
          </tbody>
        </table>
        </div>
        </div>

        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>        
        <div style={{ maxWidth: '90%', width: '100%', margin: '0 auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <caption style={{ fontWeight: 'bold', fontSize: '1.5em', textAlign: 'left'  }}>U.S History & Government</caption>
          <thead>
            <tr>
            <th style={{ textAlign: 'left', padding: '8px',  border: '1px solid black' }}>Course Number</th>
              <th style={{ textAlign: 'left', padding: '8px',  border: '1px solid black' }}>Course Name</th>
              <th style={{ textAlign: 'left', padding: '8px',  border: '1px solid black' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px'}}>HIST 1903</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>Survey of American History</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>Survey of American History. An overview of American history from the pre-colonial period to the present.</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px'}}>HIST 2003</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>U.S. History to 1877</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>The study of the development of the American nation to the Civil War and Reconstruction Era.</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px'}}>HIST 2013</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>U.S. History since 1877</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>The study of the development of the American nation since the Civil War and Reconstruction Era.</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left', padding: '8px'}}>POLS 2003</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>American Government</td>
              <td style={{ textAlign: 'left', padding: '8px'}}>A study of the principles and practices of American Government, explaining the origin and purpose of our governmental institutions in a broad sense, with consideration given to interstate and national state relations.</td>
            </tr>
          </tbody>
        </table>
        </div>
        {/* Add more tables for other sections */}
      </div>
    </div>
  );
};

export default YourComponent;