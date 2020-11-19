import React from 'react'
import "./styles.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

/**
*
 */
class Calories extends React.Component {


    render() {
        const caloriePCT = 60;
        return (
            <div class="CaloriesBackground">
                <div class="CaloriesView">
                    <h1> Calories % Consumed Today: </h1>
                    <div class="CaloriesProgressBar">
                        <CircularProgressbar
                            value={caloriePCT}
                            text={`${caloriePCT}%`}
                            styles={buildStyles({
                                minValue: 0,

                                rotation: 1,              // Rotation of path and trail, in number of turns (0-1)
                                strokeLinecap: 'round',   // 'butt' or 'round'
                                textSize: '16px',

                                pathTransitionDuration: 0.5,  // Seconds taken to go from one percentage to another

                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',

                                // Colors
                                pathColor: `rgba(62, 152, 199, ${caloriePCT / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                </div>
                </div>
            </div>
        );
    }
}


export default Calories;