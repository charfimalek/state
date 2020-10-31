import React from "react"

   class App extends React.Component {
     state= {
       FullName: 'Charfi Malek',
       Profession: 'Student',
       show: true,
       date: ''


     };
     componentDidMount() {
      setInterval(() => {
          let dateNow = new Date()
       dateNow = dateNow.getHours() + ':' + dateNow.getMinutes()
       this.setState({date: dateNow})
       }, 1000);
      

    }
     render(){
       return (
         <>
         {this.state.show && (<>
         <p>name: {this.state.FullName}</p>
         <p>Profession: {this.state.Profession}</p>
         </>
     
         )
     }
      <button onClick={()=>this.setState({show: !this.state.show})}>Show</button>
      <p>{this.state.date}</p>
         </>
     
       );
     }
   }


export default App;
