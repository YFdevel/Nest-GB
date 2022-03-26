export const htmlTemplate = (body: string) => `
<!doctype html>
<html lang="en">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6J Xm" 
crossorigin="anonymous">
<title>Hello, world!</title>
<style>
    body {
      font-size: 16px;
    }
    .container{
      width:95%;
      margin: 0 auto;
    }
    .card-title{
      font-size: 24px;
    }
    .card-wrapper{
      display: inline-block;
      width: 100%;
      padding: 40px 0;
    }
    .card {
      height:100%;
      min-width: 480px;
      display:inline-block;
      padding:10px;
      box-shadow: 2px 3px 10px rgba(0,0,0,0.4);
      margin: 0 20px 20px 0;
      vertical-align:top;
    }
    .card-content{
      padding-left:5px;
    }
    .card-comments{
      margin-top:10px;
      min-height:40px;
      max-width:95%;
      border: 1px solid rgba(0,0,0,0.4);
      border-radius:10px;
      padding: 5px;
    }
    .comment-item{
      margin-top:20px;
    }
    @media (max-width: 992px){
      .card{
        min-width: 60%;
        margin: 0 auto;
      }
      @media (max-width: 768px){
        .card{
         min-width: 90%;
        }
    }
    @media (max-width: 576px){
      .card{
        min-width: 100%;
      }
  }
  </style>
</head>
<body>
<div class="container">
<div class="card-wrapper">
${body}

</div></div>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" 
integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5K kN" 
crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" 
integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b 4Q" 
crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" 
integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCm Yl" 
crossorigin="anonymous"></script>
</body>
</html>
`;
