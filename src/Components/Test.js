<div class="card mb-3" >
          <iframe
            width="900"
            height="500"
            display="block"
            src={video.link}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <div class="card-body" >
            <h5 class="card-title">{video.name}</h5>
            <ul class="card-text">
              {video.bullets.map((bullet) => (
                <li id={video.id}>{bullet}</li>
              ))}
            </ul>
            <p class="card-text">
              <small class="text-muted">GitHub Url: {video.github}</small>
            </p>
          </div>
        </div>