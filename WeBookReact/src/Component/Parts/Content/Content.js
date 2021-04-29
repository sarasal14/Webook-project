import React from 'react' 
import MyCarousel from '../../General/Carousel/MyCarousel'
import './Content.css'

class Content extends React.Component{
    render()
    {
    return ( 
    <div id="content" className="container-fluid">

        <div className="row">

            <div className="col-10 mt-5">

                <div className="row mr-5">
                    <div className="col-3 ml-4 text-center shadow rounded topic">
                        <i className="fa fa-gift aimIcon mt-3"></i>
                        <p className="mt-2">מתן הזדמנות שווה לכל התלמידים להצטייד בסל ספרים מלא. </p>
                    </div>

                    <div className="col-3 ml-4 text-center shadow rounded topic">
                        <i className="fa fa-cc-visa aimIcon mt-3"></i>
                        <p className="mt-2"> כאן תוכלו בקלות להקל את נטל התשלומים השנתי של ההורים על הוצאות ספרי לימוד </p>
                    </div>

                    <div className="col-3 ml-4 text-center shadow rounded topic">
                        <i className="fa fa-heartbeat aimIcon mt-3"></i>
                        <p className="mt-2"> חינוך הילדים למתן יחס של כבוד לספר ופיתוח תחושת אחריות אישית לרכוש</p>
                    </div>

                </div>


            </div>
            
            <div className="col-2 mt-5">
                    <div className="shadow p-3 mb-4 rounded ml-5 btn btn-secondary signTopic">
                        <div className="text-center">
                            <div>
                                <img id="signType" src="pic/avatar2.png" />
                            </div>
                            <p>הירשם כמוסר ספרים</p>
                        </div>
                    </div>

                    <div className="shadow p-3 mb-4 rounded ml-5 btn btn-secondary signTopic">
                        <div className="text-center">
                            <p>הירשם כדורש ספרים</p>
                            <div>
                                <img id="signType2" src="pic/avatar1.png" />
                            </div>
                        </div>
                    </div>


                </div> 

            </div>

        <div id="announce">
                <h1 className="border-info shadow">
                    נתחבר לאנשים, נתחבר לצרכים,
                    ונבנה קהילה עשירה תורמת ותומכת. למסור ספר זה למסור את העולם
                </h1>
            </div>

        {/* <!-- This Div is for 3 basic school level Elementary Middle High  --> */}
        <div className="row mt-5 ml-5 m-auto">           
               
                <div className="col-sm-12 col-md-4 text-center mt-5 mb-5">
                    <div>
                        <img id="school1" src="pic/school.png" />

                        <p className="schoolName">
                            ספרים לתלמידי החינוך היסודי מוצגים בחיבוק
                        </p>
                    </div>
                    <button className="btn btn-secondary">לחץ כאן</button>
                        
                </div>

                <div className="col-sm-12 col-md-4 text-center mt-5 mb-5">
                    <div>
                        <img id="school2" src="pic/School3.png" />

                        <p className="schoolName">
                            ספרים לתלמידי חטיבת הביניים מוצעים באהבה
                        </p>
                    </div>
                    <button className="btn btn-secondary">לחץ כאן</button>
                </div>

                <div className="col-sm-12 col-md-4 text-center mt-5 mb-5">
                    <div>
                        <img id="school3" src="pic/school2.png" />

                        <p class="schoolName">
                            ספרים לתלמידי החטיבה העליונה/תיכון מוצגים עם קסם
                        </p>
                    </div>
                    <button className="btn btn-secondary">לחץ כאן</button>
                </div>

            </div>

        {/* This is my carousel */}
        <MyCarousel/>
          
    </div>//div id="content"
  
    )//return
    }//render




}//class Content
export default Content