import { createClient } from 'contentful-management'

export const space_id = '8txxyxskobwt';

export const client = require('contentful').createClient({
    space: space_id,
    accessToken: 'zEIk2O1-wxIeFcI_iIG3IN-_MPN97aWhV05jy522Tus'
});
 
export const clientManagement = createClient({
    // This is the access token for this space. Normally you get the token in the Contentful web app
    accessToken: 'CFPAT-EkPZO0xVP27eeN-qNMNu3ajYZ0KBOAJZ47BZeUlwiug',
  })

// export const clientManagement = require('contentful-management').createClient({
//     accessToken: 'CFPAT-EkPZO0xVP27eeN-qNMNu3ajYZ0KBOAJZ47BZeUlwiug'
// });
