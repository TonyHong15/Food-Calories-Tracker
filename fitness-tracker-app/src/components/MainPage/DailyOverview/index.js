import React from 'react'
import "./styles.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PieChart from './PieChart'
//landing page of the app
class DailyOverview extends React.Component{
    constructor(props) {
        super(props);
        

        this.state = {
            calorieGoal: this.getCalorieGoal(),
            currentCalories: this.getCurrentCalories(),
            caloriePCT: 0,
            carbCaloriesPCT: this.getCarbCalories(),
            proteinCaloriesPCT: this.getproteinCalories(),
            fatCaloriesPCT: this.getfatCalories(),
            carbCaloriesPCTGoal: this.getCarbCaloriesGoal(),
            fatCaloriesPCTGoal: this.getfatCaloriesGoal(),
            proteinCaloriesPCTGoal: this.getproteinCaloriesGoal(),

        }
    
    }
    componentDidMount(){
        this.setState({
            caloriePCT: Number(((this.state.currentCalories/this.state.calorieGoal)*100).toFixed(1)) 
        })
    }
    getfatCalories = () => {
        // TODO get fat calories from backend user and calculate percentage
        return 90
    }
    getCarbCaloriesGoal = () => {
        // TODO get fat calories from backend user and calculate percentage
        return 30
    }
    getfatCaloriesGoal = () => {
        // TODO get fat calories from backend user and calculate percentage
        return 30
    }
    getproteinCaloriesGoal = () => {
        // TODO get fat calories from backend user and calculate percentage
        return 40
    }
    getCarbCalories = () => {
        // TODO get carb calories from backend user and calculate percentage
        return 5
    }
    getproteinCalories = () => {
        // TODO get protein calories from backend user and calculate percentage
        return 5
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
        const {caloriePCT, currentCalories, calorieGoal, fatCaloriesPCT, carbCaloriesPCT, proteinCaloriesPCT, proteinCaloriesPCTGoal, fatCaloriesPCTGoal, carbCaloriesPCTGoal} = this.state

        return(
            <div className="daily_overview_page_wrapper">
                <div className='progress_components_wrapper'>
                    <div className='calorie_breakdown_title_wrapper'>
                        <span className='calorie_breakdown_title_text'> Calorie Goal: {calorieGoal} </span>
                    </div>
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
                        <div className='calories_consumed_wrapper'>
                            <span className = 'calories_consumed_text'>
                                Calories Consumed

                            </span>
                            <span className = 'calories_consumed_number'>
                                {currentCalories}

                            </span>                            
                          
                        </div>
                        <div className='calories_remaining_wrapper'>
                            <span  className = 'calories_remaining_text'>
                                Calories Remaining  
                            </span>
                            <span  className = 'calories_remaining_number'>
                                {calorieGoal - currentCalories}
                            </span>
                        </div>
                        <div className='calorie_goal_summary_wrapper'>
                            {caloriePCT > 100 &&
                                <span className='calorie_goal_summary_over'> You are { currentCalories - calorieGoal} calories over today's goal</span>
                            }
                             {caloriePCT <= 100 &&
                                <span className='calorie_goal_summary_under'> You are on track for today's goal</span>
                            }
                        </div>
                    </div>
                </div>
                <div className='calorie_contents_components_wrapper'>   
                    <div className='calorie_breakdown_title_wrapper'>
                        <span className='calorie_breakdown_title_text'> Calorie Breakdown </span>
                    </div>
                   
                    <div className="calorie_breakdown_wrapper">
                        <table className="calorie_breakdown_table">
                            <tbody>
                                <tr>
                                    <th>
                                    </th>
                                    <th>
                                        Total
                                    </th>
                                    <th>
                                        Goal
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="carbs_rectangle"></div>
                                        <span><strong>Carbohydrate</strong></span>
                                    </td>
                                    <td>
                                        <strong>{carbCaloriesPCT}%</strong>
                                    </td>
                                    <td>
                                        <strong>{carbCaloriesPCTGoal}%</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="fat_rectangle"></div>
                                        <span><strong>Fat</strong></span>
                                    </td>
                                    <td>
                                        <strong>{fatCaloriesPCT}%</strong>
                                    </td>
                                    <td>
                                        <strong>{fatCaloriesPCTGoal}%</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="protein_rectangle"></div>
                                        <span><strong>Protein</strong></span>                                       
                                    </td>
                                    <td>
                                        <strong>{proteinCaloriesPCT}%</strong>
                                    </td>
                                    <td>
                                        <strong>{proteinCaloriesPCTGoal}%</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <PieChart   
                        appstate = {this.state}
                    />
                       
                    
                   
                </div>
            </div>
        )

    }
} 

export default DailyOverview