
<script lang="ts">
	import { onMount, set_attributes } from "svelte/internal";
   import { Avatar } from "$lib/avatar";
   onMount( async ()=> {
      let svg = document.getElementById("svg5");
      if (!svg) { return }
      let a = new Avatar(svg);
      setInterval(a.iterate.bind(a), 1000);
   });
</script>



<div class="content-center justify-center flex">
   <svg width="1000" height="1000" viewBox="0 0 264.58333 264.58334" version="1.1" id="svg5" class="self-center">
   <g>
      <rect style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.264583;animation:1s infinite alternate slidein"
         id="background"
         width="264.58337"
         height="264.58337"
         x="0"
         y="0" />
      <path style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m 58.125357,106.90392 c 0.15512,-5.47627 0.819157,-30.455519 1.131839,-42.90031 0.280478,-11.163057 8.716205,-21.554596 24.827413,-22.490713 34.565521,-2.008376 93.938381,-1.465578 102.851211,-1.496949 10.91137,-0.03841 27.96279,6.975081 28.62455,41.768474 0.31947,16.796964 1.69788,67.437608 2.32196,85.814698 0.30946,9.11259 -13.10964,14.84071 -13.1994,23.95811 -0.17514,17.78952 -0.22188,54.44694 -0.22188,54.44694 H 97.557131 v -9.12143 H 70.977196 c 0,0 -6.438839,0.16534 -8.178443,-5.25757 -1.569712,-4.8933 3.408842,-9.7793 3.408842,-9.7793 0,0 -0.868321,-10.63328 -1.364232,-15.34021 -0.117145,-1.11188 -4.226092,-1.34385 -4.422041,-2.01861 -0.430712,-1.48319 0.659085,-2.67619 1.209081,-3.53104 0.559997,-0.87039 2.3367,-2.04461 2.3367,-2.04461 0,0 -3.698394,-1.55788 -3.797136,-3.21296 -0.0807,-1.35271 2.769198,-2.97634 2.769198,-2.97634 0,0 1.004379,-1.0488 0.961206,-1.808 -0.319409,-5.61672 -0.662502,-7.93943 -0.809531,-16.53803 -0.06657,-3.89334 -2.628787,-4.08922 -2.628787,-4.08922 l -11.975576,-1.46044 c 0,0 -3.36495,0.0366 -2.04461,-2.92087 3.608719,-11.47306 14.770118,-44.23819 15.77271,-47.31813 0.629892,-1.93501 -0.480145,-5.10078 -0.697746,-6.06486 -0.22737,-1.00736 -3.453415,-3.43189 -3.391474,-5.61863 z"
         id="head"
         />
      <path
         style="fill:#00b3de;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"
         d="m 177.00211,190.01372 16.92148,3.46611 10.2065,-108.277703 -19.15297,0.618471 z"
         id="back" />
      <path
         style="fill:#0061d7;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="M 69.226727,150.87876 94.964868,76.326904 190.3735,76.770666 167.5198,224.76498 h 4.6595 l -2.87839,21.24354 c -66.96604,-0.0366 -36.57799,-0.0732 -54.86698,-0.10974 l 13.59114,-86.81045 z"
         id="nose" />
      <path
         style="fill:#612cd7;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 76.105024,217.66481 5.064181,-36.73839 h 7.228498 l -0.08925,-6.7502 -6.656416,0.22188 1.553162,-9.98462 5.11554,-0.22188 0.169018,-52.57155 -12.162854,0.20774 9.097102,-38.607214 H 134.01584 L 111.08099,217.44293 Z"
         id="chin" />
      <path
         style="fill:#00e8d7;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 98.105123,214.79825 -1.145106,-108.42464 19.454763,-6.27573 10.51184,18.04272 1.41204,96.6316 z"
         id="face" />
      <path
         style="fill:#008300;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 173.51058,119.14985 6.2436,26.00254 -25.70638,100.86576 -12.42529,0.10374 7.90064,-41.58766 5.34946,-85.38442 z"
         id="sideback" />
      <path
         style="fill:#f2cb00;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 137.12468,53.500591 h 23.2202 l 11.35533,56.626529 -16.59082,0.1633 -0.23678,8.85943 26.18191,26.1819 -8.05635,44.71749 -4.65135,-0.0782 -3.94342,-10.69723 -9.29401,0 -13.48688,66.84812 -28.84321,-0.11284 8.66445,-41.74404 0.2067,-85.91931 5.27617,-0.20514 z"
         id="side" />
      <path
         style="fill:#ff2c2b;fill-opacity:1;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 121.75432,110.18104 -0.87326,94.71287 34.31637,-0.14 -0.21279,-94.59461 z"
         id="ear" />
      <path
         id="maze"
         style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.999999px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
         d="m 695.52539,224.03516 -359.86328,2.34179 -1.56055,457.43946 h -27.32031 l -4.14958,32.78515 h 33.03044 V 850.86719 H 703.33203 V 492.56641 h -34.34765 v 225.5957 h -81.96485 v 93.67383 H 370.79102 V 680.69336 h 49.17773 v 93.0283 H 459 v -96.15135 h 30.44336 v -36.6875 H 371.57031 V 481.63672 h 52.30274 v 114.75 H 459 v -40.5918 h 84.30664 V 416.8457 h -39.03125 v 103.04102 h -44.49414 l -2e-5,-72.59573 -92.11326,3e-5 V 257.60156 h 47.61719 v 65.57227 h 186.5664 v 28.88281 h -62.44922 v 34.3457 h 124.11719 v 30.44336 h -77.2793 v 260.72461 h 35.12696 V 451.19336 h 78.84179 v -151.4375 l -35.9082,0.7793 0.78125,50.74023 h -25.76172 l -0.77929,-62.44922 -185.78711,2.3418 -1.56055,-33.56641 244.33203,-0.78125 z M 505.83594,596.38672 v 177.19922 h 37.4707 V 596.38672 Z m 120.97265,156.88086 h 46.10157 v 62.49414 h -46.10157 z"
         transform="scale(0.26458333)" />
      <g id="eye">
         <path
            style="fill:#0042f7;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"
            d="m 98.126668,114.54583 5.935302,-8.93069 9.92915,2.49615 -6.32359,9.20804 z"
            id="sclera" />
         <path
            style="fill:#ffffff;stroke:none;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"
            d="m 103.72915,110.21916 1.49769,3.66102 3.7165,-1.60863 -1.6641,-3.49462 z"
            id="pupil" />
      </g>
   </g>
   </svg>

</div>