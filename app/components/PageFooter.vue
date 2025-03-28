<template>
	<footer class="page-footer">
		<div>
			<p class="footer-text">Is there a project?</p>
			<div class="footer-title-wrapper">
				<h2 class="footer-title">
					<span>Let&#8217;s work</span><br /><span>to</span>g<span>ether</span>
				</h2>
				<div class="footer-contacts">
					<div>
						<p class="footer-contacts-text">For all questions</p>
						<NuxtLink
							to="tel:+79202780068"
							class="footer-contacts-phone"
							>+7 (920) 278—00—68</NuxtLink
						>
						<NuxtLink
							to="mailto:qtim@agency.com"
							class="footer-contacts-mail"
							>qtim@agency.com</NuxtLink
						>
					</div>
					<div>
						<p class="footer-contacts-text">Office in Russia</p>
						<p class="contacts-sub-text">
							139 Ruben Station Lake Drew, NM 52678
						</p>
						<NuxtLink
							to="#"
							class="footer-contacts-link"
						>
							<img
								src="../assets/icons/footer-contacts-icon.svg"
								alt=""
						/></NuxtLink>
					</div>
					<div>
						<p class="footer-contacts-text">Office in Dubai</p>
						<p class="contacts-sub-text">
							139 Ruben Station Lake Drew, NM 52678
						</p>
						<NuxtLink
							to="#"
							class="footer-contacts-link"
						>
							<img
								src="../assets/icons/footer-contacts-icon.svg"
								alt=""
						/></NuxtLink>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-social">
			<ul>
				<li><NuxtLink to="#">Facebook</NuxtLink></li>
				<li><NuxtLink to="#">Instagram</NuxtLink></li>
				<li><NuxtLink to="#">Telegram</NuxtLink></li>
			</ul>
			<div>
				<NuxtLink
					to="#"
					class="go-link"
					>Go</NuxtLink
				>
			</div>
			<ul>
				<li><NuxtLink to="#">Behance</NuxtLink></li>
				<li><NuxtLink to="#">Linkedn</NuxtLink></li>
				<li><NuxtLink to="#">Privacy Policy</NuxtLink></li>
			</ul>
		</div>
	</footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.page-footer {
	display: flex;
	flex-direction: column;
	background: $purple;
	padding: 140px 112px 0 112px;
	position: relative;
	overflow: hidden;
}

.footer-title-wrapper {
	display: flex;
	gap: 368px;
}

.footer-text {
	font-size: 16px;
	line-height: 19px;
	letter-spacing: 0.01em;
	margin-bottom: 56px;
}

.footer-title {
	font-weight: 400;
	font-size: 112px;
	line-height: 140px;
	span {
		border-bottom: 1px solid $black;
	}
}

.footer-contacts {
	max-width: 152px;
	display: flex;
	flex-direction: column;
	gap: 36px;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: 0.01em;
}

.footer-contacts-text {
	margin-bottom: 12px;
}

.footer-contacts-phone,
.footer-contacts-mail {
	display: block;
	text-decoration: none;
	color: $black;
	&:hover {
		border-bottom: 1px solid $black;
	}
}

.footer-contacts-phone {
	white-space: nowrap;
	margin-bottom: 4px;
}

.footer-contacts-link img {
	border-radius: 50%;
	padding: 8px;
	width: 32px;
	height: 32px;
	background: $black;
}

.contacts-sub-text {
	margin-bottom: 8px;
}

.footer-social {
	flex-grow: 1;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	ul {
		list-style: none;
		display: flex;
		gap: 32px;
		align-items: center;
		margin-bottom: 30px;
	}
	a {
		color: $black;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		letter-spacing: 0.01em;
		&:hover {
			text-decoration: none;
		}
	}
}

.footer-social .go-link {
	position: absolute;
	left: 50%;
	bottom: -20%;
	transform: translateX(-50%);
	text-decoration: none;
	color: $white-800;
	background: $black;
	padding: 122px 160px 192px 160px;
	border-radius: 50%;
	font-weight: 400;
	font-size: 32px;
	line-height: 32px;
	&:hover {
		color: $green;
	}
}
</style>
