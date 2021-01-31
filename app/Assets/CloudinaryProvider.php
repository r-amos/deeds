<?php

namespace App\Assets;

use Cloudinary\Search;
use App\Assets\Provider;
use Illuminate\Support\Collection;

class CloudinaryProvider implements Provider
{

    /**
     * @var Search
     */
    private $searchProvider = null;

    /**
     * @param \Cloudinary $cloudinary
     *
     * @return self
     */
    public static function create(): self
    {
        $self                 = new static;
        $self->searchProvider = new Search;
        return $self;
    }

    /**
     * @param string $folder
     *
     * @return \Illuminate\Support\Collection
     */
    public function getAssetUrls(string $folder): Collection
    {
        return Collection::make(
            $this->searchProvider
                ->expression("folder:$folder")
                ->with_field('context')
                ->execute()['resources']
        )->map(fn($resource) => [
            'folder'    => $resource['folder'],
            'extension' => $resource['format'],
            'url'       => $resource['secure_url'],
        ]);
    }

    /**
     * @param string $folder
     *
     * @return \Illuminate\Support\Collection
     */
    public function getThumbnails(Collection $images): Collection
    {
        return $images->map(fn($image) => [
            'id'        => $image->getKey(),
            'url'       => $image->url,
            'thumbnail' => cl_image_tag(
                $image->folder . '/' . basename($image->url),
                [
                    'transformation' => [
                        "height"  => 293,
                        "quality" => 75,
                        "width"   => 293,
                        "crop"    => "thumb",
                        "secure"  => true,
                        "radius"  => 5,
                    ],
                ]
            ),
        ]);
    }
}
