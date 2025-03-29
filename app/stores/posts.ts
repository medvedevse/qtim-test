import type { IPost } from '~/types';

export const usePostsStore = defineStore('posts', () => {
	const { query } = useRoute();
	const router = useRouter();

	const VISIBLE_PAGES = 5;

	const currPage = ref<number>(query.page ? +query.page : 1);
	const textRef = ref<HTMLParagraphElement | null>(null);
	const isOverflowing = ref<boolean>(false);
	const countPages = ref<number>(1);
	const pagesArr = ref<number[]>([]);

	const pagesIdx = reactive({
		begin: 0,
		end: 5,
	});

	const elemBegin = computed(() => (currPage.value - 1) * 8);
	const elemEnd = computed(() => currPage.value * 8);

	const updatePagesRange = () => {
		if (currPage.value >= pagesIdx.end) {
			pagesIdx.begin = currPage.value - VISIBLE_PAGES;
			pagesIdx.end = pagesIdx.begin + VISIBLE_PAGES;
		} else if (currPage.value < pagesIdx.begin + 1) {
			pagesIdx.begin = currPage.value - 1;
			pagesIdx.end = pagesIdx.begin + VISIBLE_PAGES;
		}
	};

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

			if (nextPage > pagesIdx.end - 1) {
				pagesIdx.begin = nextPage - 5;
				pagesIdx.end = nextPage;
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

			if (prevPage < pagesIdx.begin + 1) {
				pagesIdx.begin = prevPage - 1;
				pagesIdx.end =
					prevPage + 5 > countPages.value ? countPages.value : prevPage + 5;
			}
		} else {
			router.push({
				query: { page: currPage.value },
			});
		}
	};

	const getPosts = async () => {
		const { data, error } = await useCustomFetch<IPost[]>('/posts');
		if (error.value) {
			console.error('Failed to fetch posts:', error.value);
			return;
		}

		return data.value;
	};

	const getPost = async (id: string) => {
		const { data, error } = await useCustomFetch<IPost>(`/posts/${id}`);
		if (error.value) {
			console.error('Failed to fetch post:', error.value);
			return;
		}
		return data;
	};

	return {
		getPosts,
		getPost,
		currPage,
		pagesIdx,
		textRef,
		isOverflowing,
		countPages,
		pagesArr,
		goToPage,
		goNextPage,
		goPreviousPage,
		elemBegin,
		elemEnd,
		updatePagesRange,
	};
});
