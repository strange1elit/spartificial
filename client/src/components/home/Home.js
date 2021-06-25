import React,{useState} from 'react'

import './Home.css'

const Home=()=>{
  const [isMobile,setIsMobile]=useState(false)
	window.addEventListener("resize", function() {
		if (window.innerWidth < 700) {
			setIsMobile(true)	
		}
		else setIsMobile(false)
	});

  return(
    <div className="home" id="home">
      <div className="hero-image">
        <div className="title">
          <h3>Welcome to</h3>
          <h1>Spartificial</h1>
        </div>
      </div>
      <div className="body" id="home-div">
        <div className="container-xl">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-5 text-center">
                <img loading="lazy" width="auto" className="img-fluid" src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/142413-apps-feature-art-and-science-collide-the-best-in-modern-space-art-image1-iha6vzu3wk.jpg" alt="..."/>
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h3 className="card-title">Space</h3>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula nisl purus, non faucibus turpis luctus ac. Proin quis purus in arcu faucibus interdum vitae eget turpis. Sed mollis quam quam, sit amet sollicitudin ante dignissim nec. Nunc blandit eros vel imperdiet ullamcorper. Suspendisse orci felis, rutrum eget eros ac, malesuada euismod est. Vestibulum non fringilla dolor, nec placerat enim. Ut fermentum libero accumsan. Nunc tempus semper porta. Suspendisse potenti. Integer quis rutrum elit. Mauris vitae sollicitudin dolor. In lacus augue, accumsan in dictum ac, efficitur ut urna. Curabitur sagittis, ex et posuere dignissim, risus dolor semper diam, nec varius justo velit vitae lectus.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row g-0">
              <div className={!isMobile?("col-sm-7"):("col-sm-7 order-last")}>
                <div className="card-body">
                  <h3 className="card-title">Artificial Intelligence</h3>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula nisl purus, non faucibus turpis luctus ac. Proin quis purus in arcu faucibus interdum vitae eget turpis. Sed mollis quam quam, sit amet sollicitudin ante dignissim nec. Nunc blandit eros vel imperdiet ullamcorper. Ut ultrices ligula nec nibh consequat, ut fermentum libero accumsan. Nunc tempus semper porta. Suspendisse potenti. Integer quis rutrum elit. Mauris vitae sollicitudin dolor. In lacus augue, accumsan in dictum ac, efficitur ut urna. Curabitur sagittis, ex et posuere dignissim, risus dolor semper diam, nec varius justo velit vitae lectus.</p>
                </div>
              </div>
              <div className="col-md-5 text-center">
                <img loading="lazy" width="auto" className="img-fluid" src="https://images.idgesg.net/images/article/2019/11/ai_artificial_intelligence_ml_machine_learning_vector_by_kohb_gettyimages_1146634284-100817775-large.jpg" alt="..."/>
              </div>

            </div>
          </div>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-5 text-center">
                <img loading="lazy" width="auto" className="img-fluid" src="https://www.globalizationpartners.com/wp-content/uploads/2019/12/e-learning-blog.png" alt="..."/>
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h3 className="card-title">Education</h3>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula nisl purus, non faucibus turpis luctus ac. Proin quis purus in arcu faucibus interdum vitae eget turpis. Sed mollis quam quam, sit amet sollicitudin ante dignissim nec. Nunc blandit eros vel imperdiet ullamcorper. Suspendisse orci felis, rutrum eget eros ac, malesuada euismod est. Vestibulum non fringilla dolor, nec placerat enim. Ut fermentum libero accumsan. Nunc tempus semper porta. Suspendisse potenti. Integer quis rutrum elit. Mauris vitae sollicitudin dolor. In lacus augue, accumsan in dictum ac, efficitur ut urna. Curabitur sagittis, ex et posuere dignissim, risus dolor semper diam, nec varius justo velit vitae lectus.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home