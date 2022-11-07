<script>
	import { onMount } from 'svelte';

	let mainCarousel;
	let articleCarousel;
	let isMobileView;

	const arrows = false;
	const duration = 0;
	const autoplay = true;
	const autoplayDuration = 3000;
	let magDate = '';
	let magTitle = '';
	let magDesc = '';
	const images = [
        {path: '/carousel/test1.jpeg', id: 'image1'},
        {path: '/carousel/test2.jpeg', id: 'image2'},
        {path: '/carousel/test3.jpeg', id: 'image3'},
        {path: '/carousel/test4.jpeg', id: 'image4'},
        {path: '/carousel/test5.jpeg', id: 'image5'},
    ];

	const articles = [
		{
			path: '/carousel/1.png', 
			title: 'Something which I always wanted to say since ages, I think this is going to eventually work out when the text gets longer', 
			min_read: '12 mins read'
		}, 

		{
			path: '/carousel/2.png', 
			title: 'Extremely short title', 
			min_read: '12 mins read'
		},

		{
			path: '/carousel/3.png', 
			title: 'Something which I always wanted to say since ages, I think this is going to eventually work out when the text gets longer', 
			min_read: '12 mins read'
		},

		{
			path: '/carousel/4.png', 
			title: 'Short title', 
			min_read: '12 mins read'
		},

		{
			path: '/carousel/5.png', 
			title: 'Something which I always wanted to say since ages, I think this is going to eventually work out when the text gets longer', 
			min_read: '12 mins read'
		},

		{
			path: '/carousel/6.png', 
			title: 'Something which I always wanted to say since ages, I think this is going to eventually work out when the text gets longer', 
			min_read: '12 mins read'
		},
	]
	function setMagazineDataFromStrapi() {
		// Ideally a call should be made to strapi server.
		// Get me the record from magazine table where the field = 'latest'
		magDate = 'December 2023';
		magTitle = 'Featuring Kalaripayattu New';
		magDesc = '3000-year-old Indian martial art form that develops harmony';
	}

	const mediaQueryHandler = (/** @type {{ matches: any; }} */ e) => {
		// Reset mobile state
		if (!e.matches) {
			isMobileView = false;
		}
		else {
			isMobileView = true;
		}
	};
	
	onMount(async () => {
		const module = await import('svelte-carousel');
		mainCarousel = module.default;
		articleCarousel = module.default;
		setMagazineDataFromStrapi();
		
		const mediaQueryList = window.matchMedia('(max-width: 767px)');
		mediaQueryList.addEventListener('change', mediaQueryHandler);
	});
</script>

<svelte:component this={mainCarousel} {arrows} {duration} {autoplay} {autoplayDuration} class="w-full">
	{#each images as image}
    	<div class="w-full h-[36rem]"><img src={image.path} alt={image.id} id={image.id} /></div>
  	{/each}
</svelte:component>

<div class="px-4 md:px-36 pt-16 pb-24 font-serif text-5xl text-center leading-normal property">
    <h2>Ta<mark>rang</mark> is a digital magazine featuring Indian culture, art, traditions and music in all forms.</h2>
</div>

<div class="bg-slate-100 mx-auto my-20 flex w-3/5 rounded-3xl">
	<img class="my-10 ml-10 mr-20 h-96 w-72 rounded-3xl object-cover" src="/carousel/3.png" alt="kalaripayattu"/>
    <div>
    	<div class="pt-24 pb-2 font-serif text-xl leading-normal property">
			<h2>{magDate}</h2>
		</div>
		<div class="pt-2 pb-2 font-serif text-4xl leading-normal property">
    		<h2>{magTitle}</h2>
		</div>
		<div class="pt-2 pb-2 font-serif text-3xl leading-normal property">
    		<h2>{magDesc}</h2>
		</div>
		<div>
			<button>Read Now</button>
		</div>
    </div>
</div>

{#if !isMobileView}
	<div class="grid grid-cols-3 my-24">
		{#each articles as article}
			<div>
				<img class="mx-auto my-10 h-96 w-96 rounded-3xl object-cover" src={article.path} alt="kalaripayattu"/>
				<p class="font-serif text-xl mx-auto px-4 text-center">{article.title}</p>
				<p class="font-serif mx-auto px-4 text-center">{article.min_read}</p>	
			</div>
		{/each}	
	</div>
{/if}


{#if isMobileView}
	<svelte:component this={articleCarousel} arrows=true duration=10>
		{#each articles as article}
			<div>
				<img class="mx-auto my-10 h-96 w-96 rounded-3xl object-cover" src={article.path} alt="kalaripayattu"/>
				<p class="font-serif text-xl mx-auto px-4 text-center">{article.title}</p>
				<p class="font-serif mx-auto px-4 text-center">{article.min_read}</p>	
			</div>
		{/each}	
	</svelte:component>
{/if}