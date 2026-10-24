# todo

## now
- [x] fake data (artists + artworks json) so i can build ui first
- [x] featured section at the top (big images, admin picks)
- [x] main feed below featured (flow view = loose grid, list view = rows)
  - [x] flow grid
  - [x] list view + make the header toggle actually work
  - [x] fade between flow and list instead of just swapping
- [x] artwork card: image, title caps, artist, [ n ] count thing
- [ ] click artwork -> image slides left, details panel opens beside it, esc / x closes
  - [x] panel component (title, artist, medium, size, price, year, description)
  - [x] like / follow / inquire links in the panel (signed out for now)
  - [x] hook panel up to the feed (esc closes)
  - [x] slide animation when it opens
- [ ] artist page (clickable names)

## later
- [ ] db (prob sqlite + prisma first)
- [ ] auth, browsing stays public, sign in only to like / follow / inquire
- [ ] one account type, "i'm an artist" toggle turns on artist profile + uploads
- [ ] likes + follows
- [ ] inquire button -> message to artist
- [ ] admin page to pick featured works
- [ ] artist upload form
- [ ] mobile pass
- [ ] deploy somewhere

## design notes for myself
- keep it plain. off white bg, black text, grey captions, no accent colors
- no rounded pill buttons, no gradients, no shadows, no emoji
- small uppercase labels, brackets like [ 3 ]
- the art is the color, ui stays out of the way
- motion slow and smooth, nothing bouncy
