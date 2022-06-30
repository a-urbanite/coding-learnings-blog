import React from 'react'

const DAIWordpressPlugin = () => {
  return (
    <>
      <h1 className='title'>[PHP] Wordpress Plugin</h1>
      <p>
        As part of my work as Webmaster at the German Archaeoligical Institute i had to make sure 
        the online presences of the institute are up to current legal standards. 
      </p><br/>
      <p>
        In the last years the topic of image attribution has gained largely in importance.
        The task given to me was to provide the content creators of the institutes many departments with 
        a tool to manage image attribution as metadata. Simply adding those to the images “caption” 
        was not an ideal solution because over the years thousands of images had accumulated already.
      </p><br/>
      <p>
        I played around with freely available plugins such as “Advanced Custom Fields” and its 
        abilities to interact with other plugins but couldnt approach a satisfiying solution.
      </p><br/>
      <p>
        Finally I decided to write a plugin on ym own that fit the specific needs of the institute.
        Wordpress as a content management system (CMS) is written in PHP and designed to be pretty easy to modify with custom code.
        Over the years, this lead to a vast ecosystem of plugins and its customizability is surely one cornerstone of 
        <a href='https://wpbuffs.com/wordpress-market-share/' target="_blank" rel="noreferrer">Wordpress` large success.</a> 
      </p><br/>
      <p>
        I specified two custom fields that extend the metadata of media attachments, 
        “Photographer” and “Copyright”. First, I added those fields to the Media attachment detail view 
        where the content creators could add the information after upload.
      </p><br/>
      <img className='text-images' src="/images/wordpress-plugin-1.jpg" alt="wordpress-plugin-1" />
      <p>
        Next i added both custom fields to the admin media view and made both columns sortable 
        so that the content creators could sort through their images and retrospectively add the 
        missing metadata. To deal with the already existing images i added a script that would fill 
        the additional metadata info for existing images with default values upon installation of 
        the plugin.
      </p>
      <img className='text-images' src="/images/wordpress-plugin-2.jpg" alt="wordpress-plugin-2" />
      <p>
        Finally, i added a functionality to generate a preformatted prefix that would be added 
        to the images “caption” field. Instead of adjusting the theme files to display the 
        custom fields I opted to integrate the custom fields into a common metadata because 
        the WordPress Multisite network employs a multitude of different themes and i had 
        to make sure the information would be displayed correctly on all of them. 
      </p>
      <img className='text-images' src="/images/wordpress-plugin-3.jpg" alt="wordpress-plugin-3" />
      <p>
        With that solution in place the content creators can sort through their collection 
        conveniently and update the missing metadata. It will be displayed automatically on 
        their posts and credit is finally given where credit is due.
      </p>
      <p>
        The complete code can be found on my <a href='https://github.com/a-urbanite/WordPress-plugin-image-metadata-management/' target="_blank" rel="noreferrer">GitHub account</a>.
        The Plugin is currently active on the <a href='https://www.dainst.blog/'  target="_blank" rel="noreferrer">German Archaeological Institute´s Blog System.</a>
      </p>
    </>
  )
}

export default DAIWordpressPlugin