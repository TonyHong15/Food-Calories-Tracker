import React from 'react'
import "./styles.css"
import { Grid} from "@material-ui/core";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PieChart } from 'react-minimal-pie-chart';
//landing page of the app
class DailyOverview extends React.Component{
    constructor(props) {
        super(props);
        

        this.state = {
            calorieGoal: this.getCalorieGoal(),
            currentCalories: this.getCurrentCalories(),
            caloriePCT: 0
        }
    
    }
    componentDidMount(){
        this.setState({
            caloriePCT: Number(((this.state.currentCalories/this.state.calorieGoal)*100).toFixed(1)) 
        })
    }

    getCurrentCalories = () => {
        // TODO get current calories from backend
        return 2900
    }

    getCalorieGoal = () => {
        // TODO get from user information in backend
        return 3000
    }

    render() {
        const {caloriePCT, currentCalories, calorieGoal} = this.state
        console.log(this.state.calorieGoal)
        return(
            <div className="daily_overview_page_wrapper">
                <div className='progress_components_wrapper'>
                    <h1>Calorie Goal: {calorieGoal}</h1>
                    {caloriePCT > 100 &&
                        <CircularProgressbar
                        value={caloriePCT - 100}
                        text={'Consumed: '+`${caloriePCT}%`}
                        className='progress_bar_size'
                        styles={buildStyles({
                            minValue: 0,

                            rotation: 1,        
                            strokeLinecap: 'round',  
                            textSize: '0.6rem',

                            pathTransitionDuration: 0.7,  
                            
                            pathColor: `rgba(220, 0, 0)`,
                            textColor: 'c00',
                            trailColor: '0c0',
                            backgroundColor: '#3e98c7',
                        })}
                        />
                    }
                    {caloriePCT <= 100 &&
                        <CircularProgressbar
                        value={caloriePCT}
                        text={'Consumed: '+`${caloriePCT}%`}
                        className='progress_bar_size'
                        styles={buildStyles({
                            minValue: 0,

                            rotation: 1,        
                            strokeLinecap: 'round',  
                            textSize: '0.6rem',

                            pathTransitionDuration: 0.7,  
                            
                            pathColor: `rgba(0, 220, 0)`,
                            textColor: '0c0',
                            trailColor: '#d6d6d6',
                            backgroundColor: '#3e98c7',
                        })}
                        />
                    }
                    <div className='progress_statistics'>

                    </div>
                </div>
                {/* <div>
                    <h1> Calories % Consumed Today: </h1>
                    <div className="CaloriesProgressBar">

                        <PieChart
                            data={[
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },
                        ]}
                        />
                    </div>
                </div> */}
            </div>
        )

    }
}

export default DailyOverview