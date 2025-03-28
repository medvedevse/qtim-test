// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 compatibilityDate: '2024-11-01',
 devtools: { enabled: true },

 future: {
					compatibilityVersion: 4,
	},

 css: ['~/assets/scss/main.scss'],

 vite: {
					css: {
									preprocessorOptions: {
													scss: {
																	additionalData: `
							@use "~/assets/scss/_vars.scss" as *;
							@use "~/assets/scss/_mixins.scss" as *;
							`,
													},
									},
					},
	},

 modules: ["@pinia/nuxt"],
});