import React from 'react'

const DAIWordpressPlugin = () => {
  return (
    <>
      <h2>German Archaeological Institute Wordpress Plugin</h2>
      <p>
        As part of my work as Webmaster at the German Archaeoligical Institute i have to make sure 
        the online presences of the institute are up to current legal standards. 
        In the last years the topic of image attribution has gained largely in importance.
      </p>
      <p>
        The task at hand was to provide the content creators of the institutes many departments with 
        a tool to manage image attribution as metadata. Simply adding those to the images “caption” 
        was not an ideal solution because over the years thousands of images accumulated already.
      </p>
      <p>
        I played around with freely available plugins such as “Advanced Custom Fields” and its versatile 
        abilities to interact with other plugins but couldnt approach a satisfiying solution.
      </p>
      <p>
        The solution was to write a plugin that fit the specific needs of the institute. 
        I specified to custom fields that extend the metadata of media attachments, 
        “Photographer” and “Copyright”. First, I added those fields to the Media attachment detail view 
        where the content creators could add the information after upload.
      </p>
    </>
  )
}

export default DAIWordpressPlugin