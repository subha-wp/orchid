'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Plus, Trash2, Save } from 'lucide-react';
import type { ContentData, HeroImage, GalleryImage, Service } from '@/lib/data';

export default function AdminDashboard() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'hero' | 'gallery' | 'services' | 'facilities'>('hero');
  const [content, setContent] = useState<ContentData | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (authenticated) {
      loadContent();
    }
  }, [authenticated]);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/check');
      const data = await res.json();
      if (data.authenticated) {
        setAuthenticated(true);
      } else {
        router.push('/admin/login');
      }
    } catch (error) {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const loadContent = async () => {
    try {
      const res = await fetch('/api/content');
      const data = await res.json();
      setContent(data);
    } catch (error) {
      console.error('Failed to load content:', error);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const handleSave = async () => {
    if (!content) return;
    setSaving(true);
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        alert('Content saved successfully!');
      } else {
        alert('Failed to save content');
      }
    } catch (error) {
      alert('Error saving content');
    } finally {
      setSaving(false);
    }
  };

  const updateHeroImage = (index: number, field: 'url' | 'alt', value: string) => {
    if (!content) return;
    const newImages = [...content.hero.images];
    newImages[index] = { ...newImages[index], [field]: value };
    setContent({ ...content, hero: { ...content.hero, images: newImages } });
  };

  const addHeroImage = () => {
    if (!content) return;
    setContent({
      ...content,
      hero: {
        ...content.hero,
        images: [...content.hero.images, { url: '', alt: '' }],
      },
    });
  };

  const removeHeroImage = (index: number) => {
    if (!content) return;
    const newImages = content.hero.images.filter((_, i) => i !== index);
    setContent({ ...content, hero: { ...content.hero, images: newImages } });
  };

  const updateGalleryImage = (index: number, field: 'url' | 'alt' | 'category', value: string) => {
    if (!content) return;
    const newImages = [...content.gallery.images];
    newImages[index] = { ...newImages[index], [field]: value };
    setContent({ ...content, gallery: { ...content.gallery, images: newImages } });
  };

  const addGalleryImage = () => {
    if (!content) return;
    setContent({
      ...content,
      gallery: {
        ...content.gallery,
        images: [...content.gallery.images, { url: '', category: '', alt: '' }],
      },
    });
  };

  const removeGalleryImage = (index: number) => {
    if (!content) return;
    const newImages = content.gallery.images.filter((_, i) => i !== index);
    setContent({ ...content, gallery: { ...content.gallery, images: newImages } });
  };

  const updateService = (index: number, field: 'title' | 'description' | 'image' | 'icon', value: string) => {
    if (!content) return;
    const newServices = [...content.services];
    newServices[index] = { ...newServices[index], [field]: value };
    setContent({ ...content, services: newServices });
  };

  const addService = () => {
    if (!content) return;
    setContent({
      ...content,
      services: [...content.services, { icon: 'Heart', title: '', description: '', image: '' }],
    });
  };

  const removeService = (index: number) => {
    if (!content) return;
    const newServices = content.services.filter((_, i) => i !== index);
    setContent({ ...content, services: newServices });
  };

  const updateFacility = (index: number, value: string) => {
    if (!content) return;
    const newFacilities = [...content.facilities];
    newFacilities[index] = value;
    setContent({ ...content, facilities: newFacilities });
  };

  const addFacility = () => {
    if (!content) return;
    setContent({ ...content, facilities: [...content.facilities, ''] });
  };

  const removeFacility = (index: number) => {
    if (!content) return;
    const newFacilities = content.facilities.filter((_, i) => i !== index);
    setContent({ ...content, facilities: newFacilities });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-orchid-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-inter">Loading...</p>
        </div>
      </div>
    );
  }

  if (!authenticated || !content) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-playfair font-bold text-gray-800">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-inter font-medium"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto">
            {(['hero', 'gallery', 'services', 'facilities'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-inter font-medium capitalize transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'border-orchid-600 text-orchid-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Tab */}
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-playfair font-bold mb-4">Hero Section</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-inter font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={content.hero.title}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, title: e.target.value } })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchid-500 focus:border-transparent font-inter"
                  />
                </div>
                <div>
                  <label className="block text-sm font-inter font-medium text-gray-700 mb-2">Subtitle</label>
                  <input
                    type="text"
                    value={content.hero.subtitle}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, subtitle: e.target.value } })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchid-500 focus:border-transparent font-inter"
                  />
                </div>
                <div>
                  <label className="block text-sm font-inter font-medium text-gray-700 mb-2">Description</label>
                  <input
                    type="text"
                    value={content.hero.description}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, description: e.target.value } })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchid-500 focus:border-transparent font-inter"
                  />
                </div>
                <div>
                  <label className="block text-sm font-inter font-medium text-gray-700 mb-2">Tagline</label>
                  <input
                    type="text"
                    value={content.hero.tagline}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, tagline: e.target.value } })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchid-500 focus:border-transparent font-inter"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-inter font-semibold">Hero Images</h3>
                  <button
                    onClick={addHeroImage}
                    className="flex items-center space-x-2 bg-orchid-600 text-white px-4 py-2 rounded-lg hover:bg-orchid-700 transition-colors font-inter text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Image</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {content.hero.images.map((image, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start space-x-4">
                        {image.url && (
                          <img src={image.url} alt={image.alt} className="w-32 h-32 object-cover rounded-lg" />
                        )}
                        <div className="flex-1 space-y-3">
                          <div>
                            <label className="block text-sm font-inter font-medium text-gray-700 mb-1">Image URL</label>
                            <input
                              type="text"
                              value={image.url}
                              onChange={(e) => updateHeroImage(index, 'url', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchid-500 focus:border-transparent font-inter text-sm"
                              placeholder="Enter image URL"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-inter font-medium text-gray-700 mb-1">Alt Text</label>
                            <input
                              type="text"
                              value={image.alt}
                              onChange={(e) => updateHeroImage(index, 'alt', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchid-500 focus:border-transparent font-inter text-sm"
                              placeholder="Image description"
                            />
                          </div>
                        </div>
                        <button
                          onClick={() => removeHeroImage(index)}
                          className="text-red-600 hover:text-red-700 p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-playfair font-bold">Gallery Images</h2>
                <button
                  onClick={addGalleryImage}
                  className="flex items-center space-x-2 bg-orchid-600 text-white px-4 py-2 rounded-lg hover:bg-orchid-700 transition-colors font-inter text-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Image</span>
                </button>
              </div>
              <div className="space-y-4">
                {content.gallery.images.map((image, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      {image.url && (
                        <img src={image.url} alt={image.alt} className="w-32 h-32 object-cover rounded-lg" />
                      )}
                      <div className="flex-1 space-y-3">
                        <div>
                          <label className="block text-sm font-inter font-medium text-gray-700 mb-1">Image URL</label>
                          <input
                            type="text"
                            value={image.url}
                            onChange={(e) => updateGalleryImage(index, 'url', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchid-500 focus:border-transparent font-inter text-sm"
                            placeholder="Enter image URL"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-inter font-medium text-gray-700 mb-1">Category</label>
                          <input
                            type="text"
                            value={image.category}
                            onChange={(e) => updateGalleryImage(index, 'category', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchid-500 focus:border-transparent font-inter text-sm"
                            placeholder="Category name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-inter font-medium text-gray-700 mb-1">Alt Text</label>
                          <input
                            type="text"
                            value={image.alt}
                            onChange={(e) => updateGalleryImage(index, 'alt', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchid-500 focus:border-transparent font-inter text-sm"
                            placeholder="Image description"
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => removeGalleryImage(index)}
                        className="text-red-600 hover:text-red-700 p-2"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-playfair font-bold">Services</h2>
                <button
                  onClick={addService}
                  className="flex items-center space-x-2 bg-orchid-600 text-white px-4 py-2 rounded-lg hover:bg-orchid-700 transition-colors font-inter text-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Service</span>
                </button>
              </div>
              <div className="space-y-4">
                {content.services.map((service, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      {service.image && (
                        <img src={service.image} alt={service.title} className="w-32 h-32 object-cover rounded-lg" />
                      )}
                      <div className="flex-1 space-y-3">
                        <div>
                          <label className="block text-sm font-inter font-medium text-gray-700 mb-1">Title</label>
                          <input
                            type="text"
                            value={service.title}
                            onChange={(e) => updateService(index, 'title', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchid-500 focus:border-transparent font-inter text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-inter font-medium text-gray-700 mb-1">Description</label>
                          <input
                            type="text"
                            value={service.description}
                            onChange={(e) => updateService(index, 'description', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchid-500 focus:border-transparent font-inter text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-inter font-medium text-gray-700 mb-1">Image URL</label>
                          <input
                            type="text"
                            value={service.image}
                            onChange={(e) => updateService(index, 'image', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchid-500 focus:border-transparent font-inter text-sm"
                            placeholder="Enter image URL"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-inter font-medium text-gray-700 mb-1">Icon (Heart, Users, Cake, Briefcase, Home, Gift)</label>
                          <input
                            type="text"
                            value={service.icon}
                            onChange={(e) => updateService(index, 'icon', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchid-500 focus:border-transparent font-inter text-sm"
                            placeholder="Icon name"
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => removeService(index)}
                        className="text-red-600 hover:text-red-700 p-2"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Facilities Tab */}
        {activeTab === 'facilities' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-playfair font-bold">Facilities</h2>
                <button
                  onClick={addFacility}
                  className="flex items-center space-x-2 bg-orchid-600 text-white px-4 py-2 rounded-lg hover:bg-orchid-700 transition-colors font-inter text-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Facility</span>
                </button>
              </div>
              <div className="space-y-3">
                {content.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={facility}
                      onChange={(e) => updateFacility(index, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orchid-500 focus:border-transparent font-inter"
                      placeholder="Facility description"
                    />
                    <button
                      onClick={() => removeFacility(index)}
                      className="text-red-600 hover:text-red-700 p-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Save Button */}
        <div className="fixed bottom-8 right-8">
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-gradient-to-r from-orchid-600 to-orchid-700 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-orchid-500/50 transition-all duration-300 flex items-center space-x-2 font-inter font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                <span>Save All Changes</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

