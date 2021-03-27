<div id="{{ $quote->index }}" class="bg-purple-600 h-screen w-screen flex flex-col items-center justify-center bg-{{ $quote->colour }}-900 point slider {{$visibility ?? 'invsible'}}">
    <div style="max-height:75%; flex-basis:75%;" class="w-4/6 flex flex-col">
        <div id="header" class=" flex justify-center flex-shrink mb-10">
            <header class="">
                  <div class="flex justify-center flex-row items-center">
                      <h1 class="flex font-roboto uppercase text-md xl:text-3xl font-semibold xl:font-extrabold text-{{ $quote->colour }}-500 tracking-wider">Daily</h1>
                      <img class="inline-block max-h-8 xl:max-h-24 mx-2 xl:mx-4" src="https://res.cloudinary.com/dy5neeiyk/image/upload/v1611233065/p49esb1x71rmm_wa9noh.png">
                      <h1 class="flex font-roboto uppercase text-md xl:text-3xl font-semibold xl:font-extrabold text-{{ $quote->colour }}-500 tracking-wider">Deeds</h1>
                  </div>
              </header>
        </div>
        <div id="container-{{$quote->index}}" style="max-height: 80%" class="flex flex-grow">

            <div class="flex-shrink:0 max-width:50% flex bg-red-600" id="quote-container-{{$quote->index}}" style="flex-basis:50%;" >



                                <div class="text-9xl font-arial text-{{ $quote->colour }}-300 flex bg-blue-900">
                                    <div>&ldquo;</div>
                                </div>
                                <div id="quote-{{$quote->index}}" class="font-merriweather text-gray-200 font-semibold xl:font-bold leading-tight flex self-center pt-10 pl-10 pb-10">
                                    {{ $quote->text }}
                                </div>
                                <div class="text-9xl font-arial text-{{ $quote->colour }}-300 flex flex-col-reverse pr-5 bg-blue-600">
                                    <div style="line-height:0;">&rdquo;</div>
                                </div>


                                <div class="break" style="flex-basis:100%; height:0"></div>



                    <div class="bg-green-900">
                        <div class="w-full font-roboto font-medium text-md xl:text-2xl tracking-wide text-gray-100 border-t pt-1 xl:pt-4 ml-5 flex">
                                <span class="uppercase self-start">Dee Dee *</span><span class="uppercase self-start text-sm ml-3 mt-1">~ {{$quote->year}}</span>
                        </div>
                        <div class="align-bottom text-xs w-full font-roboto tracking-wide text-gray-100 pt-1 xl:pt-3 pl-3 italic pb-5">
                            * May of actually been said by <span id="{{$quote->author}}" class="text-xs font-semibold xl:text-base xl:font-medium"> {{ $quote->author }} </span>
                        </div>
                    </div>


            </div>

            <div style="min-width:50%; flex-basis:50%; background-image:url({{ $quote->image }}); background-size:cover; background-position:center;" id="image" class="flex-shrink:0"></div>
        </div>
    </div>
</div>


<!-- <div id="{{ $quote->index }}" class="min-w-vw h-screen bg-{{ $quote->colour }}-900 point slider {{$visibility ?? 'invsible'}}">
    <div class="h-full flex flex-col">
          <div class="flex-grow flex items-center justify-center -mt-8 flex-col">
              <header class="-mt-10 xl:-mt-10 mb-1 xl:mb-10">
                  <div class="flex justify-center flex-row mt-1 xl:mt-10 items-center">
                      <h1 class="flex font-roboto uppercase text-md xl:text-3xl font-semibold xl:font-extrabold text-{{ $quote->colour }}-500 tracking-wider">
                          Daily
                      </h1>
                      <img class="inline-block max-h-8 xl:max-h-24 mx-2 xl:mx-4" src="https://res.cloudinary.com/dy5neeiyk/image/upload/v1611233065/p49esb1x71rmm_wa9noh.png">
                      <h1 class="flex font-roboto uppercase text-md xl:text-3xl font-semibold xl:font-extrabold text-{{ $quote->colour }}-500 tracking-wider">
                          Deeds
                      </h1>
                  </div>
              </header>
              <div id="container-{{$quote->index}}" class="max-h-test flex flex-col-reverse xl:flex-row w-5/6 xl:w-4/6 whatever tester relative">
                  <div class="flexy pb-2 xl:flex-grow xl:w-1/2 bg-{{ $quote->colour }}-600 px-7 xl:px-20 flex items-center justify-center flex-col">
                          <div id="quote-container-{{$quote->index}}" class="xl:mt-10 h-5/6 xl:h-4/6 flex flex-col relative justify-center pt-5  pl-3 xl:pt-0 xl:pl-0">
                              <div class="absolute -left-4 top-10 xl:-left-14 xl:-top-10 text-6xl xl:text-9xl font-arial text-{{ $quote->colour }}-300 leading-3">
                                  &ldquo;
                              </div>
                              <p id="quote-{{$quote->index}}" class="mh-80 font-merriweather text-gray-200 font-semibold xl:font-bold leading-tight xl:pb-10">
                                {{ $quote->text }}
                              </p>
                              <div class="absolute -right-2 bottom-4 xl:-right-10 xl:-bottom-10 text-6xl xl:text-9xl font-arial text-{{ $quote->colour }}-300 leading-3">
                                  &rdquo;
                              </div>
                          </div>
                          <a id="refresh-{{$quote->index}}" href="{{ Request::url() }}" class="refresh refresh-top bg-{{ $quote->colour }}-900 absolute flex items-center justify-center">
                              <svg class="svg-icon" style="width: 2.5em; height: 2.5em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                  <path id="refresh-icon-{{$quote->index}}" stroke-width=2 class="refresh-icon" d="M854 335.3l-0.3 0.2c-5.6-9.3-15.9-15.6-27.6-15.6-17.8 0-32.2 14.4-32.2 32.1 0 5.3 1.3 10.3 3.6 14.7h-0.1c22 43.4 34.4 92.5 34.4 144.5C831.8 687.8 688.6 831 512 831S192.2 687.9 192.2 511.2c0-152.4 106.5-279.2 249.1-311.2l-33.6 43.7c-10.8 14-8.1 34.2 5.9 45 14 10.8 34.2 8.1 45-5.9l75.3-97.8c6.5-5.9 10.6-14.4 10.6-23.8 0-11.3-5.9-21.2-14.7-27L429.3 57.1c-13.8-10.6-33.8-8-44.4 5.7l-0.6 0.8c-10.6 13.8-8 33.7 5.8 44.3l38.4 29.5C257 175.9 128.9 329.1 128.9 512.2c0 212.1 172 384.1 384.1 384.1s384.1-172 384.1-384.1c0-63.8-15.5-124-43.1-176.9z" />
                              </svg>
                          </a>
                          <div class="w-full font-roboto font-medium text-md xl:text-2xl tracking-wide text-gray-100 border-t pt-1 xl:pt-4 ml-5 flex">
                              <span class="uppercase self-start">Dee Dee *</span>
                              <span class="uppercase self-start text-sm ml-3 mt-1">~ {{$quote->year}}</span>
                          </div>
                          <div class="align-bottom text-xs w-full font-roboto tracking-wide text-gray-100 pt-1 xl:pt-3 pl-3 italic pb-5">
                              * May of actually been said by <span id="{{$quote->author}}" class="text-xs font-semibold xl:text-base xl:font-medium"> {{ $quote->author }} </span>
                          </div>
                  </div>
                  <div class="overflow-hidden flexy">
                      <img id="image" class="h-full w-full object-cover" src="{{ $quote->image }}" >
                  </div>
              </div>
          </div>
    </div>
</div> -->
