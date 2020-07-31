# JCU CookBook

## What is it?

The JCU CookBook is a set of tools for building user interfaces for the web
that have a common look and feel.  This is the beginning of a new era for
everything from the simplest single page site through enterprise systems.
This is something that hasn't been attempted...until now.

*tl;dr*:

* It makes apps shiny
* Reusable across systems
* Score better UX and consistency with less effort
* Collaborate at <https://web.jcu.io>
* It needs a better name
* Based on Bootstrap v4

The web is integral to all organisations and we're certainly no exception.
For instance, we know a few things:

* Mobile usage is on the rise
* Web apps need to be accessible to devices like screen readers
* HTML5, CSS3 and associated technology are the norm now
* Web & technology constantly redefining itself
* We need to be able to keep up as easily as possible.
* It's hard to build organisation-themed sites without common styles/tools.

Establishing consistency in web-based system is hard - nigh, impossible -
without having a degree of commonality. The past approaches of theming web
systems are unsustainable and a lot of hard work.  In our experience, it
typically involved scraping whatever the latest version of the main website was
at the time and hacking at that until it kinda fit on top of your application.
The CMS styles, structure, and format aren't designed to be extended so it's no
surprise that once you've completed an app, it isn't likely to see an update in
its lifetime.   This is what we did with the [Research
Portfolio](https://jcu.me) back in 2012, and unsurprisingly, it still looks the
same, but only for a little while longer.

In order to deliver a cohesive digital experience as an organisation,
whether it's to our students, researchers, or staff, we need a common set of
tools.  So, we're introducing the [JCU CookBook](https://cookbook.jcu.io) for
all to use!

The Research Portfolio is the whole reason behind the creating CookBook,
the rationale being that more systems can use it, reducing efforts and
distributing the workload of maintenance.  It's no surprise that's where we'll
be applying it soon.

The JCU CookBook is built on Bootstrap, and aims to be our brand manual and
tookit for the web.  Like Bootstrap, it consists of various front-end web UI
components, adding several new ones that are for JCU; features numerous example
page layouts for theming in different ways; adds common resources such as logos,
and background images; and has plenty of documentation on how to apply CookBook
to an application.

From a technical viewpoint, it needs to be dead-simple to set up on an
application and building on the work the Bootstrap community has done gets us
there. The components added for JCU (such as the Campus Stack, overlay cards and
background utiltities) are tested for compatibility so someone using CookBook
can just get started and focus on their work.  The documentation makes
best-practice suggestions of accessibility standards and markup to use, and
includes tools like [tota11y](https://khan.github.io/tota11y/) for visualising
issues with accessibility.

There's always more work to be done: as new apps and sites
utilise CookBook, we can include them as demonstrations and use cases in
the documentation.  We're super-excited to see and hear how development teams
and vendors across the University make use of this game-changing toolkit.
We'd love to hear what you think.

Check out the docs at <https://cookbook.jcu.io> and get started now.


## Justification for open source

As you may have read previously, the JCU CookBook is being hosted on
GitHub, a code host that you've probably heard about before.  The CookBook
currently based upon Bootstrap v4, is open source for everyone to see, utilise
and indeed contribute to.  As CookBook is specific to JCU, we're not
envisaging creating a world-wide open source community out of the project, but
there's still benefits to having the code open.  Here's our thinking:

* **Re-use:** Twitter did it, GovUK have done it and countless more share their
  code for various reasons.  For us, if others can make use of the components
  we've written or learn from what we've done, then we've achieved our goal.
  The days of reinventing the wheel are long gone.
For us, we want to encourage reuse across all of
  our organisation and making it as obvious as possible helps that cause.

* **Access:** By making the code open to the world, we're making ourselves
  easier to work with and more transparent about how we operate, especially for
  external collaborators or contractors.  Making the code more easily
  discoverable aims to reduce siloing of code or information and aims to tackle
  those situations where a third party might otherwise recreate our designs.

* **Resourcing:** We need to get things done as quickly as possible and hosting
  as means there's no overhead to managing accounts or licences, and using a
  industry-standard tool like GitHub means that anyone who feels they want to
  contribute can do so with ease.

* **Issue tracking:** With GitHub's built-in issue tracking, resolving issues
  becomes transparent, and anyone is free to report a concern, suggest a
  feature, or offer their assistance in updating documentation or code.  Again, we
  don't envisage a mega community, but someone re-using a component we've made can
  contribute easily.

So that's how we see the benefits all JCU users (and the public). There's also
the added benefit of good PR for the University through sharing these resources.

Open source code might have a polarising effect on different people, depending
on backgrounds and past experience.  Here's what I could imagine the concerns
are and explain why they're either already mitigated:

* **Copyright:** the fact that all of the code is open in a Git repository makes
  it very easy to clone and obtain.  This might be a concern from a copyright
  point of view, except the resources (such as CSS, images and script) are already
  publicly available at <https://www.jcu.edu.au> and associated websites.  In
  short, if someone wanted to steal resources, they've been able to for decades.
  As a matter of fact, we've been able to put a clear copyright notice in our
  repo, which actually makes the copyright more obvious than just arbitrary
  resources on a website.

* **Security:** having all the resources in one area would certainly make it
  simple for a hacker who's looking to replicate JCU's page layouts.
  The fact the our web pages and [login
  screens](https://cas.secure.jcu.edu.au/cas/login) are already public means it's
  always been and will always be easy.  In fact, if we wanted to maintain it, we
  could use CookBook as a way of tracking usage via a mechanism like
  [Canarytokens](https://canarytokens.com/), so we could detect if they're being
  used on a non-JCU (or non-verified domain).

* **Off-site hosting:** well, given that we already depend on hosted versions of
  our CMS, learning management system, Dropbox, Office 365, risk management
  software, finance acquittal system and plenty more, off-site hosting is more
  of risk mitigation than a risk.  Since Git is a distributed version control
  system, the data is easily moved to another hosting provider (or hosted
  locally) at any point.

Overall, this is fantastic opportunity to collaborate across our organisation
and to contribute back to the community.  The team working on Bootstrap is doing
a great job so it's only fitting we're able to [contribute
back](https://github.com/twbs/bootstrap/issues?utf8=%E2%9C%93&q=author%3Adavidjb+)
as part of this project.

It's worth a read about why the UK Government is [Coding in the
Open](https://gds.blog.gov.uk/2012/10/12/coding-in-the-open/); that helps
explaining our rationale as well.
