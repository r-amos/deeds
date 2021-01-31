<!doctype html>
  <head>
    <!-- ... --->
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <link href="{{ asset('css/app.css') }}" rel="stylesheet">
   <link rel="preconnect" href="https://fonts.gstatic.com">
   <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;900&display=swap" rel="stylesheet">
  </head>
  <body class="container h-full mx-auto">
      <div class="container h-full px-10 flex flex-wrap mx-auto mt-5">
        <div class="container h-3/6 flex justify-center items-center">
            <div class="another mr-7">
                <img class="test" src="{{$deeds}}" />
            </div>
            <div class="w-1/3">
                <h1 class="text-5xl font-bold pb-3 text-purple-700 font-merriweather"> Hi, I'm Dee Dee...</h1>
                <p class=" text-l text-purple-500 font-merriweather pb-5">
                    Welcome to my site full of dee-lightful images! 🐈
                </p>
                <ul class="flex">
                    <li class="pr-4"><span class="font-bold">500 million</span> followers</li>
                    <li><span class="font-bold">{{ count($images )}}</span> posts</li>
                </ul>
            </div>
        </div>
        <div class="mx-auto container flex flex-wrap justify-between w-10/12">
            @foreach($images as $image)
                <a class="mb-3 " href="images/{{$image['id']}}">
                        {!! $image['thumbnail'] !!}
                </a>
            @endforeach
        </div>
      </div>
  </body>
</html>
