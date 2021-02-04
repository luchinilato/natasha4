import {clientManagement, space_id} from './contentful';
const content_type_id = 'clientes';

export const createCliente = () => {
    
    console.log(space_id);
    console.log(content_type_id);

    let fields = {
        nome: {
          "en-US": 'Title' //works
        },
    }

    clientManagement.getSpace(space_id).then((space) => {
        // This API call will request an environment with the specified ID
        // space.getEnvironment('master').then((environment) => {
        //   // Now that we have an environment, we can get entries from that space
        //   environment.getEntries().then((entries) => {
        //     console.log(entries.items)
        //   })
      
        //   // let's get a content type
        //   environment.getContentType('clientes').then((contentType) => {
        //     // and now let's update its name
        //     console.log(contentType);
        //     contentType.nome = 'New Product'
        //     contentType.update().then((updatedContentType) => {
        //       console.log('Update was successful')
        //     })
        //   })
        // })
        console.log(space);
        space.createEntry(content_type_id, {
            fields: fields
          })
    })

    // clientManagement.getSpace(space_id)
    // .then((space) => space.createEntry(content_type_id, {
    //   fields: fields
    // }))
    // .then((entry) => console.log(entry))
    // .catch(console.error)

};