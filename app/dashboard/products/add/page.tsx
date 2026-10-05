'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Product name is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Valid price is required';
    }
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    if (!formData.stock || parseInt(formData.stock) < 0) {
      newErrors.stock = 'Valid stock quantity is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      alert('Product added successfully!');
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <div>
      <div className="header-actions">
        <h2>Add Product</h2>
      </div>

      <div className="card form-card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Product Name *</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter product name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span style={{ color: '#dc3545', fontSize: '12px' }}>{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea
                name="description"
                className="form-control"
                rows={4}
                placeholder="Enter product description"
                value={formData.description}
                onChange={handleChange}
              />
              {errors.description && <span style={{ color: '#dc3545', fontSize: '12px' }}>{errors.description}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Price *</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={handleChange}
                />
                {errors.price && <span style={{ color: '#dc3545', fontSize: '12px' }}>{errors.price}</span>}
              </div>

              <div className="form-group">
                <label>Category *</label>
                <select
                  name="category"
                  className="form-control"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Food">Food</option>
                  <option value="Books">Books</option>
                  <option value="Home">Home & Garden</option>
                  <option value="Sports">Sports</option>
                </select>
                {errors.category && <span style={{ color: '#dc3545', fontSize: '12px' }}>{errors.category}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>Stock Quantity *</label>
              <input
                type="number"
                name="stock"
                className="form-control"
                placeholder="0"
                min="0"
                value={formData.stock}
                onChange={handleChange}
              />
              {errors.stock && <span style={{ color: '#dc3545', fontSize: '12px' }}>{errors.stock}</span>}
            </div>

            <div className="form-group">
              <label>Product Image</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
              />
              <small style={{ color: '#666' }}>Supported formats: JPG, PNG, GIF</small>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-success">
                <i className="fas fa-save" style={{ marginRight: '8px' }}></i>
                Save Product
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => router.push('/dashboard')}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
