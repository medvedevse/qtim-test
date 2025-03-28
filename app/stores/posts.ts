import type { IPost } from '~/types';

export const usePostsStore = defineStore('posts', () => {
	const { query } = useRoute();
	const router = useRouter();

	const currPage = ref<number>(query.page ? +query.page : 1);
	const textRef = ref<HTMLParagraphElement | null>(null);
	const isOverflowing = ref<boolean>(false);
	const countPages = ref<number>(1);
	const pagesArr = ref<number[]>([]);

	const pages = reactive({
		begin: currPage.value > 5 ? currPage.value - 5 : 0,
		end: currPage.value > 5 ? currPage.value : 5,
	});

	const elemBegin = computed(() => (currPage.value - 1) * 8);
	const elemEnd = computed(() => currPage.value * 8);

	const goToPage = (page: number) => {
		router.push({
			query: { page: page },
		});
	};

	const goNextPage = () => {
		const nextPage = currPage.value + 1;
		if (nextPage <= countPages.value) {
			router.push({
				query: { page: nextPage },
			});

			if (nextPage > pages.end) {
				pages.begin = nextPage - 5;
				pages.end = nextPage;
			}
		} else {
			router.push({
				query: { page: currPage.value },
			});
		}
	};

	const goPreviousPage = () => {
		const prevPage = currPage.value - 1;
		if (prevPage > 0) {
			router.push({
				query: { page: prevPage },
			});

			if (prevPage < pages.begin) {
				pages.begin = prevPage;
				pages.end =
					prevPage + 5 > countPages.value ? countPages.value : prevPage + 5;
			}
		} else {
			router.push({
				query: { page: currPage.value },
			});
		}
	};

	const getPosts = async () => {
		const { data } = await useCustomFetch<IPost[]>('/posts');
		return data;
	};

	const getPost = async (id: string) => {
		const { data } = await useCustomFetch<IPost>(`/posts/${id}`);
		return data;
	};

	return {
		getPosts,
		getPost,
		currPage,
		pages,
		textRef,
		isOverflowing,
		countPages,
		pagesArr,
		goToPage,
		goNextPage,
		goPreviousPage,
		elemBegin,
		elemEnd,
	};
});
