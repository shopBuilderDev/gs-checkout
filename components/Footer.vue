<template>
	<div class="bg-slate-700 flex justify-center">
		<div class="mt-10 mb-20 mr-20">
			<h2 class="text-2xl text-white mb-5">CONTACT US</h2>
			<ul>
				<li class="flex">
					<span class="text-amber-300 mb-3"><PhoneIcon /></span>
					<span class="pl-2 text-white">972-315-3758</span> 
				</li>
				<li class="flex">
					<span class="text-amber-300 mb-3"><EmailIcon /></span>
					<span class="pl-2 text-white hover:text-amber-500">
						<a href="mailto:sales@goldenstarauto.com">sales@goldenstarauto.com</a></span> 
				</li>
				<li class="flex">
					<span class="text-amber-300 mb-3"><LocationIcon /></span>
					<span class="pl-2 text-white">1800 Waters Ridge Drive<br>
						Suite 200 Lewisville, TX 75057
					</span> 
				</li>
			</ul>
			<img src="/GS-Logo.png" class="mt-20" />
		</div>

		<div class="mt-10 mb-20 mr-20">
			<h2 class="text-2xl text-white mb-5">INFORMATION</h2>
			<FooterInfoLinks />
		</div>

		<div class="mt-10 mb-20">
			<h2 class="text-2xl text-white mb-5">CUSTOMER SERVICE</h2>
			<FooterCSLinks />
		</div>
	</div>
</template>


<script setup>

</script>