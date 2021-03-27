
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
        let quotes = {!! json_encode($quotes) !!};
        const apiUrl = '{{ env('API_URL') }}';
    </script>
    <script src="{{ mix('js/app.js') }}" defer></script>
  </head>
  <body id="body" class="slider overflow-hidden">
    <div id="current flex">
        <div class="bg-purple-600 h-screen w-screen flex flex-col items-center justify-center">
            <div style="flex-basis:75%;" class="w-4/6 flex flex-col">
                <div id="header" class=" flex justify-center flex-shrink bg-green-200 mb-10">
                    <div class="text-6xl">Header</div>
                </div>
                <div id="quote" class="flex flex-grow">
                    <div style="flex-basis:50%;" id="text">
                    </div>
                    <div style="flex-basis:50%; background-image:url({{ $quote->image }}); background-size:cover" id="image" class="bg-red-100">
                        <!-- <img class="overflow-hidden object-cover" src="{{ $quote->image }}" > -->
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
        bg-rose-100 bg-rose-600 bg-rose-900 text-rose-500 text-rose-500 text-rose-300 flex-row-reverse
    ">
    </div>
  </body>
</html>
