Gem::Specification.new do |spec|
  spec.name          = "jekyll-rtd-theme"
  spec.version       = "1.1.7"
  spec.authors       = ["saowang"]
  spec.email         = ["saowang@outlook.com"]

  spec.summary       = "GitHub-flavored docs theme for Jekyll, based on sphinx_rtd_theme"
  spec.license       = "MIT"
  spec.homepage      = "https://github.com/rundocs/jekyll-rtd-theme"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "github-pages", "~> 207"
end
