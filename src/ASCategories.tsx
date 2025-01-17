import React  from 'react'; 
import { ASRedButton } from './ASButton';
import { ASPageView } from './ASPageView';
import { Image, Text, View } from 'react-native';

export const ASCategoryData = [
    { name: "Government Efficiency", parent: null },
        { name: "Infrastructure", parent: "Government Efficiency" },
        { name: "State Debt", parent: "Government Efficiency" },
        { name: "Citizen Tax Burden", parent: "Government Efficiency" },
        { name: "Unfunded Pension Liability", parent: "Government Efficiency" },
        { name: "Federal Dependency", parent: "Government Efficiency" },
        { name: "Credit Rating", parent: "Government Efficiency" },
        { name: "State Employees", parent: "Government Efficiency" },
        { name: "Financial Records Available Online", parent: "Government Efficiency" },
        { name: "Government Use of Technology", parent: "Government Efficiency" },
        { name: "Governor's Goals and Measures Online", parent: "Government Efficiency" },
        { name: "Government Open Data Online", parent: "Government Efficiency" },
        { name: "Government Spending (% of GDP)", parent: "Government Efficiency" },
    { name: "Health", parent: null },
        { name: "Cost of Healthcare", parent: "Health" },
        { name: "Rate of Obesity (Adult)", parent: "Health" },
        { name: "Infant Mortality Rate", parent: "Health" },
        { name: "Uninsured", parent: "Health" },
        { name: "Smokers", parent: "Health" },
        { name: "Workplace Injuries", parent: "Health" },
        { name: "Quality of Life/Happiness", parent: "Health" },
        { name: "Food Insecurity", parent: "Health" },
    { name: "Prosperity", parent: null },
        { name: "Real GDP", parent: "Prosperity" },
        { name: "GDP Growth Rate", parent: "Prosperity" },
        { name: "Economic Diversity", parent: "Prosperity" },
        { name: "Business Competitiveness", parent: "Prosperity" },
        { name: "Household Income", parent: "Prosperity" },
        { name: "Unemployment Rate", parent: "Prosperity" },
        { name: "Net Job Growth", parent: "Prosperity", screen: "NetJobGrowth" },
        { name: "Income Inequality", parent: "Prosperity" },
        { name: "New Firms", parent: "Prosperity" },
        { name: "Venture Capital Investment", parent: "Prosperity" },
        { name: "Adult Poverty", parent: "Prosperity" },
        { name: "Child Poverty", parent: "Prosperity" },
    { name: "Environmental", parent: null },
        { name: "Renewable Energy", parent: "Environmental" },
        { name: "Carbon Dioxide Emissions", parent: "Environmental" },
        { name: "Water Quality", parent: "Environmental" },
        { name: "Air Quality", parent: "Environmental" },
    { name: "Education", parent: null },
        { name: "K-8 Testing (4th)", parent: "Education" },
        { name: "K-8 Testing (8th)", parent: "Education" },
        { name: "High School Graduation Rate", parent: "Education" },
        { name: "SAT/ACT Mean", parent: "Education" },
        { name: "2-year Degree", parent: "Education" },
        { name: "4-year Degree", parent: "Education" },
        { name: "Professional/Advanced Degrees", parent: "Education" },
    { name: "Public Safety", parent: null },
        { name: "Violent Crime", parent: "Public Safety" },
        { name: "Property Crimes", parent: "Public Safety" },
        { name: "Rate of Incarceration", parent: "Public Safety" },
        { name: "Cost of Corrections System", parent: "Public Safety" },
        { name: "Traffic Fatalities", parent: "Public Safety" },
        { name: "Child Maltreatment", parent: "Public Safety" },
        { name: "Affordable Housing", parent: "Public Safety" },
]

export const ASCategoriesScreen = ({ navigation }) => {
    return (
        <ASPageView style={{ padding: 0, gap: 0 }}>
            <Image source={require('../img/kansas.capitol.jpg')} style={{
                width: '100%', 
                height: 180,  
                resizeMode: 'stretch'
            }} />
            <View style={{ backgroundColor: "rgb(255, 193, 0)", height: 44, justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', fontSize: 18}}>
                    Kansas
                </Text>
            </View>
            <View style={{ padding: 20, gap: 8 }}>
                {ASCategoryData.filter(category => category.parent == null).map(category => (
                    <ASRedButton 
                        key={category.name} 
                        title={category.name} 
                        onPress={() => navigation.push("CategoryDetail", category)} />
                ))}
            </View>
        </ASPageView>
    );
};
