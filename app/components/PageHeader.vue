<template>
	<header class="page-header">
		<NuxtLink
			to="/"
			class="page-header-logo"
			><img
				src="../assets/icons/logo-icon.svg"
				alt="Logo"
		/></NuxtLink>

		<nav class="page-header-nav">
			<ul class="header-nav-links">
				<li><NuxtLink to="#">Works</NuxtLink></li>
				<li><NuxtLink to="#">About</NuxtLink></li>
			</ul>
			<ul class="header-nav-controls">
				<li class="lang-switcher">
					<NuxtLink to="#"
						><img
							src="../assets/icons/lang-switcher-icon.svg"
							alt="Language"
					/></NuxtLink>
				</li>
				<li class="lets-work-link"><NuxtLink to="#">Let’s work</NuxtLink></li>
			</ul>
		</nav>
	</header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.page-header {
	max-width: 1440px;
	padding: 0 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.page-header-logo img {
		display: block;
	}
}

.page-header-nav {
	display: flex;
	gap: 90px;
	ul {
		list-style: none;
		display: flex;
		align-items: center;
	}
}

.header-nav-links {
	gap: 58px;
	a:hover {
		border-bottom: 1px solid $black;
	}
}

.header-nav-controls {
	gap: 16px;
}

.header-nav-links a,
.header-nav-controls a {
	@include HeaderNavText;
	color: $black;
	text-decoration: none;
}

.lang-switcher a {
	border: 2px solid rgba(0, 0, 0, 0.1);
	border-radius: 50%;
	padding: 10px;
	width: 52px;
	height: 52px;
	display: flex;
	&:hover {
		background: $white-500;
	}
}

.lets-work-link a {
	border-radius: 50px;
	padding: 16px 32px;
	width: 142px;
	height: 52px;
	background: $black;
	color: $white-800;
	&:hover {
		color: $white-300;
	}
}
</style>
