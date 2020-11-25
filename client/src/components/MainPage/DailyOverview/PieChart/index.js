import React from 'react'
import { VictoryPie} from 'victory';
class PieChart extends React.Component {

	render() {
        const {fatCaloriesPCT, proteinCaloriesPCT, carbCaloriesPCT} = this.props.appstate
        const data = [
            { category: carbCaloriesPCT+'%', percentage: carbCaloriesPCT},
            { category: fatCaloriesPCT+'%', percentage: fatCaloriesPCT},
            { category: proteinCaloriesPCT+'%', percentage: proteinCaloriesPCT}

        ]
		return (
		<div>
			 <VictoryPie
                data={data}
                x="category"
                y="percentage"
                innerRadius={130}
                labelRadius={140}
                radius={161}
                colorScale={['green', 'orange', 'brown']} 
            />
		</div>
		);
	}
}
export default PieChart                    