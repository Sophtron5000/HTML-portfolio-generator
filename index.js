const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'fullName',
      message: 'What is your full name?'
    },
    {
        name: 'location',
        message: 'What is your location?'
      },
      {
        name: 'bio',
        message: 'Please enter a short bio..'
      },
      {
        name: 'linkedInURL',
        message: 'What is your LinkedIn URL?'
      },
      {
        name: 'gitHubURL',
        message: 'What is your GitHub URL?'
      },
  ])



  .then((answers) => {
      let fileName = 'portfolio.html'
      .then(fs.writeFile(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      
          <title>Document</title>
      </head>
      <body>
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${fullName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${location}</h6>
                <p class="card-text">${bio}</p>
                <a href="#" class="card-link">${linkedInURL}</a>
                <a href="#" class="card-link">${gitHubURL}</a>
              </div>
            </div>
      
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      </body>
      </html>`))
  })

  




