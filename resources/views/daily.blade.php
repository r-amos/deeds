<!doctype html>
  <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <link href="{{ asset('css/app.css') }}" rel="stylesheet">
   <link rel="preconnect" href="https://fonts.gstatic.com">
   <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;500;600;700;900&display=swap" rel="stylesheet">
   <link rel="preconnect" href="https://fonts.gstatic.com">
   <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Roboto+Condensed:wght@400;500:700&display=swap" rel="stylesheet">
    <!-- Scripts -->
    <script>
        let colour = '{!! $colour !!}';
        let quotes = {!! json_encode($quotes) !!};
    </script>
    <script src="{{ mix('js/app.js') }}" defer></script>
  </head>
  <body id="body" class="slider overflow-hidden">
   <div id="cover" class="bg-purple-200 h-screen v-screen w-full flex justify-center items-center fast-slide absolute">
        <div class="flex justify-center flex-row -mt-10 items-center">
            <h1 class="flex font-roboto uppercase text-8xl font-extrabold text-purple-500 tracking-wider">
                    Daily
            </h1>
            <img class="px-10 inline-block max-h-60 mx-4" src="https://res.cloudinary.com/dy5neeiyk/image/upload/v1611233065/p49esb1x71rmm_wa9noh.png">
            <h1 class="flex font-roboto uppercase text-8xl font-extrabold text-purple-500 tracking-wider">
                Deeds
            </h1>
        </div>
    </div>

    <div id="current">
      <div id="1" class=" min-w-vw h-screen bg-{{ $colour }}-100 point slider">
          <div class="h-full flex flex-col">
                <div class="flex-grow flex items-center justify-center -mt-8 flex-col">
                    <header class="-mt-10 mb-10">
                        <div class="flex justify-center flex-row mt-10 items-center">
                            <h1 class="flex font-roboto uppercase text-3xl font-extrabold text-{{ $colour }}-500 tracking-wider">
                                Daily
                            </h1>
                            <img class="inline-block max-h-24 mx-4" src="https://res.cloudinary.com/dy5neeiyk/image/upload/v1611233065/p49esb1x71rmm_wa9noh.png">
                            <h1 class="flex font-roboto uppercase text-3xl font-extrabold text-{{ $colour }}-500 tracking-wider">
                                Deeds
                            </h1>
                        </div>
                    </header>
                    <div id="container-1" class="flex h-5/6 w-4/6 whatever tester relative">
                        <div class="h-full w-1/2 bg-{{ $colour }}-600 px-20 flex items-center justify-center flex-col">
                                <div id="quote-container-1" class="h-4/6 flex flex-col relative justify-center">
                                    <div class="absolute -left-14 top-0 text-8xl font-arial text-{{ $colour }}-300 leading-3">
                                        &ldquo;
                                    </div>
                                    <p id="quote-1" class="font-merriweather text-7xl text-gray-200 font-bold leading-tight pb-6">
                                        {{ $quote['text'] }}
                                    </p>
                                    <div class="absolute -right-10 bottom-10 text-8xl font-arial text-{{ $colour }}-300 leading-3">
                                        &rdquo;
                                    </div>
                                </div>
                                <button id="refresh-1" class="refresh bg-{{ $colour }}-900 absolute flex items-center justify-center">
                                    <svg class="svg-icon" style="width: 2.5em; height: 2.5em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <path id="refresh-icon-1" stroke-width=2 class="refresh-icon" d="M854 335.3l-0.3 0.2c-5.6-9.3-15.9-15.6-27.6-15.6-17.8 0-32.2 14.4-32.2 32.1 0 5.3 1.3 10.3 3.6 14.7h-0.1c22 43.4 34.4 92.5 34.4 144.5C831.8 687.8 688.6 831 512 831S192.2 687.9 192.2 511.2c0-152.4 106.5-279.2 249.1-311.2l-33.6 43.7c-10.8 14-8.1 34.2 5.9 45 14 10.8 34.2 8.1 45-5.9l75.3-97.8c6.5-5.9 10.6-14.4 10.6-23.8 0-11.3-5.9-21.2-14.7-27L429.3 57.1c-13.8-10.6-33.8-8-44.4 5.7l-0.6 0.8c-10.6 13.8-8 33.7 5.8 44.3l38.4 29.5C257 175.9 128.9 329.1 128.9 512.2c0 212.1 172 384.1 384.1 384.1s384.1-172 384.1-384.1c0-63.8-15.5-124-43.1-176.9z" />
                                    </svg>
                                </button>
                                <div class="w-full font-roboto font-medium text-2xl tracking-wide text-gray-100 border-t pt-4 ml-5 flex">
                                    <span class="uppercase self-start">Dee Dee *</span>
                                    <span class="uppercase self-start text-sm ml-3 mt-1">~ {{$year}}</span>
                                </div>
                                <div class="align-bottom text-xs w-full font-roboto tracking-wide text-gray-100 pt-3 pl-3 italic">
                                    * May of actually been said by <span id="author" class="text-base font-medium"> {{ $quote['author'] }} </span>
                                </div>
                        </div>
                        <div id="image-container-1" class="w-1/2 overflow-hidden overlay">
                            <img id="image-1" class="w-full h-full object-cover" src="{{ $url }}" >
                        </div>
                    </div>
                </div>
          </div>
    </div>
    </div>
    <div class="invisible
    bg-purple-100 bg-purple-600 bg-purple-900 text-purple-500 text-purple-500 text-purple-300
        bg-red-100 bg-red-600 bg-red-900 text-red-500 text-red-500 text-red-300
        bg-blue-100 bg-blue-600 bg-blue-900 text-blue-500 text-blue-500 text-blue-300
        bg-green-100 bg-green-600 bg-green-900 text-green-500 text-green-500 text-green-300
        bg-yellow-100 bg-yellow-600 bg-yellow-900 text-yellow-500 text-yellow-500 text-yellow-300
        bg-indigo-100 bg-indigo-600 bg-indigo-900 text-indigo-500 text-indigo-500 text-indigo-300
        bg-pink-100 bg-pink-600 bg-pink-900 text-pink-500 text-pink-500 text-pink-300 bg-gray-100 text-gray-300
        bg-gray-600 bg-gray-900 text-gray-500 text-gray-500
        bg-orange-100 bg-orange-600 bg-orange-900 text-orange-500 text-orange-500 text-orange-300
        bg-amber-100 bg-amber-600 bg-amber-900 text-amber-500 text-amber-500 text-amber-300
        bg-lime-100 bg-lime-600 bg-lime-900 text-lime-500 text-lime-500 text-lime-300
        bg-emerald-100 bg-emerald-600 bg-emerald-900 text-emerald-500 text-emerald-500 text-emerald-300
        bg-teal-100 bg-teal-600 bg-teal-900 text-teal-500 text-teal-500 text-teal-300
        bg-cyan-100 bg-cyan-600 bg-cyan-900 text-cyan-500 text-cyan-500 text-cyan-300
        bg-lightBlue-100 bg-lightBlue-600 bg-lightBlue-900 text-lightBlue-500 text-lightBlue-500 text-lightBlue-300
        bg-violet-100 bg-violet-600 bg-violet-900 text-violet-500 text-violet-500 text-violet-300
        bg-fuchsia-100 bg-fuchsia-600 bg-fuchsia-900 text-fuchsia-500 text-fuchsia-500 text-fuchsia-300
        bg-rose-100 bg-rose-600 bg-rose-900 text-rose-500 text-rose-500 text-rose-300
    ">
    </div>
  </body>
</html>
