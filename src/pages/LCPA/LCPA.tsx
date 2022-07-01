import React from 'react'

const LCPA = () => {
  return (
    <>
      <h1 className='title'>[R] Least-Cost-Path analysis</h1>
      <p>
        In 2018 I wrote my Master thesis, titled&nbsp;
        <a href='https://www.academia.edu/36323339/Evaluating_Arabias_traderoutes_with_Least_Cost_Path_analysis_pptx' target="_blank" rel="noreferrer">
          “Evaluating Arabia´s trade routes with Least-Cost path analysis” 
        </a>
        &nbsp;which became my first major coding project.
      </p><br/>
      {/* <div className='inset'>
        <h2 className='inset_title'>
          The abstract
        </h2>
        <p className='inset-text'>
          The aromatics trade between southern Arabia and the Mediterranean world was one of the most extensive trade patterns in Antiquity with significant impact on the involved regions. Part of Its infrastructure was a network of camel-caravan-operated trade routes across the Arabian Peninsula. This study aims to identify factors that influenced the formation of this route network. In the first part routes where reconstructed based on writings of Greek Geographers describing the trade. These reconstructions were refined with topographical maps of the regions and current state archaeological research. In the second part the same routes were modelled using Least Cost Path analysis (lcpa). The results of both parts were compared with each other in order to define whether cost-efficiency was the sole and primary motivation and/or to which extent different factors influenced the formation of these routes. The study concerns the state of the route network at the zenith of the aromatics trade between the 2nd century bce and the 1st century ce. The study area is limited to the northern half of the trade route network, running from Medina in western Saudi Arabia to the port of Gaza in the Palestine Territories.
        </p>
      </div><br/> */}
      <p>
        Put shortly, the aim was to collect what we knew about the ancient trade routes on the Arabian 
        Peninsula, termed the&nbsp;
        <a href='https://en.wikipedia.org/wiki/Incense_trade_route' target="_blank" rel="noreferrer">
          “Incense Route“
        </a>
        , and compare that with a computer model of the most efficient routes. Differences and similarities would help understand the efficiency of the ancient trade route and give insights about their creation.
      </p>
      <img src='/images/LCPA-1.jpg' alt='LCPA1' className='text-images'></img>
      <br/>
      <p>
        There are many ways to run basic Least Cost path analysis in GIS programs. In ArcGIS there is the Spatial Analyst Toolbox and  in QGIS quite a number of Plugins can be found. But those solution often lack the ability to adjust certain parameters  or they are limited to certain cost algorithms. The only way to fully customize the analysis, at least in 2018, was to program it myself. In the field of Geostatistics, R is the language of choice.
      </p><br/>
      <p>
        Based on&nbsp;
        <a href='https://www.topoi.org/publication/34259/' target="_blank" rel="noreferrer">
          Modelling Human Behaviour in Landscapes by Narkoinz and Knitter
        </a> 
        &nbsp;and with the functions provided by the&nbsp;
        <a href='https://cran.r-project.org/web/packages/gdistance/index.html' target="_blank" rel="noreferrer">
          R package gdistance
        </a>
        &nbsp;i developed the workflow that is outlined below.
      </p>
      <img src='/images/LCPA-2.jpg' alt='LCPA2' className='text-images'></img><br/>
      <p>
      The analysis was successfull. I was able to confirm my initial hypothesis that the trade routes used for high-value inter-regional trade were quite efficient and the trade routes connected to more local trade patterns less so. I was able to establish correlations between trade route characteristics and landscape characteristics which provided potential insights into the formation process of the “Incense Route”.
      </p><br/>
      <img src='/images/LCPA-3.jpg' alt='LCPA3' className='text-images'></img><br/>
      <p>
        A special challenge was the hardware requirements. The limitation that comes with the gdistance package is that the calculations are run inside the RAM. Considering a route of approximately 200km length resulted in a DEM raster of around 200 MB size. The intermediary product, called transition matrix, was more than 50 GB in size. Luckily, through my job at TOPOI, a research institute for landscape archaeology, i had access to Computers with 64GB RAM. But if i plan to continue the research on even larger route systems i will need to opt for hosted HPC such as Amazon AWS or clusters that belong to universities.
      </p><br/>
      <p>     
        A realisation i had was that i particularly enjoyed the coding part of this project. Getting into the mindset of programming with its own logic, that is somewhat removed from the mindset needed for research in Humanities, turned out to be no obstacle but an enjoyable challenge. I drew the  conclusion for myself was that i wanted focus more on programming in the future.
      </p><br/>
      <p>
        The R-script can be found on&nbsp;
        <a href='https://github.com/a-urbanite/Arabia-traderoutes-LCP' target="_blank" rel="noreferrer">
          Github.
        </a>
      </p>

    </>
  )
}

export default LCPA