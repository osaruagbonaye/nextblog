const posts = [
    {
        id: 1,
        title: 'SuperRentals is now live!',
        publishedDate: '2022-01-01',
        author: 'SuperRentals Admin',
        authorImage: 'https://picsum.photos/40',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu massa vel elit tempor auctor. Nam vulputate vehicula quam a mattis.',
        body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        image: 'https://picsum.photos/400',
        slug: 'superrentals-is-now-live'
    },
    {
        id: 2,
        title: 'Meet our team!',
        publishedDate: '2022-02-01',
        author: 'SuperRentals Team Member',
        authorImage: 'https://picsum.photos/40',
        excerpt: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        image: 'https://picsum.photos/400',
        slug: 'meet-our-team'
    },
    {
        id: 3,
        title: 'Rolling out to EMEA!',
        publishedDate: '2022-03-01',
        author: 'EMEA SuperRentals Admin',
        authorImage: 'https://picsum.photos/40',
        excerpt: 'Nesciunt voluptate, quibusdam sunt iste dolores consequatur. Mauris non semper dui. Aenean ac gravida sem.',
        body: 'Donec augue lectus, tincidunt ut nunc at, rutrum tincidunt enim. Mauris mauris metus, vestibulum sed dolor quis, pellentesque finibus ligula. Vestibulum vulputate lacus ac nibh ultricies, a congue eros porta. Nulla facilisi. Cras accumsan lectus quis nunc sollicitudin, vestibulum mollis arcu auctor. Nunc leo tellus, ultrices nec dapibus et, finibus non erat. Aliquam porttitor sollicitudin rhoncus. Duis pulvinar condimentum odio, quis commodo odio suscipit vitae. Phasellus vel egestas magna. Mauris non semper dui. Aenean ac gravida sem. Nam ut luctus turpis. Praesent ut lectus nisi. Aenean a augue feugiat neque feugiat aliquam vitae eget augue.',
        image: 'https://picsum.photos/400',
        slug: 'rolling-out-to-europe'
    }
];

export function getPosts() {
    return posts;
}

export function getSlugs() {
    let slugs = [];
    getPosts().map(post => slugs.push(`/blog/${post.slug}`));
    return slugs;
}

export function getPost(slug) {
    let post = null;
    getPosts().map((item) => {
        if (item.slug === slug) {
            post = item;
            return;
        }
    });
    return post;
}
